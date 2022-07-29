const chai = require("chai");
const shell = require("shelljs");
const chaiHttp = require("chai-http");
const crypto = require("crypto");

chai.use(chaiHttp);

const server = require("../../api/app");
const user = require("../../controllers/user");

const { expect } = chai;

const adminUser = {
  email: "adm@deliveryapp.com",
  password: "--adm2@21!!--",
};

const userCustomerForCreate = {
  name: "Rogerinho da Vila Maria",
  email: "rogerinho@gmail.com",
  password: "123451",
  role: "customer",
};

const hashPassword = (password) => {
  return crypto.createHash("md5").update(password).digest("hex");
};

const userSellerForCreate = {
  name: "Rogerinho da Vila Maria2",
  email: "rogerinho2@gmail.com",
  password: "123451",
  role: "seller",
};

describe("Create User Like Admin - Sua aplicação deve ter o endpoint POST `/admin`", () => {
  before(() => {
    shell.exec(
      "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
    );
  });

  describe("Será validado que é possível criar um usuário de qualquer tipo com sucesso", () => {
    let token;

    before((done) => {
      chai
        .request(server)
        .post("/login")
        .send(adminUser)
        .end((err, res) => {
          if (err) done(err);
          token = res.body.token;
          done();
        });
    });

    it("Criando como customer", (done) => {
      chai
        .request(server)
        .post("/admin")
        .set("authorization", token)
        .send(userCustomerForCreate)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(201);
          expect(res.body).have.contains.key("user");
          expect(res.body.user).have.contains.keys(
            "name",
            "email",
            "role",
            "password"
          );
          expect(res.body.user.password).to.be.equal(
            hashPassword(userCustomerForCreate.password)
          );
          expect(res.body).to.be.deep.equal({
            user: {
              ...userCustomerForCreate,
              password: hashPassword(userCustomerForCreate.password),
            },
          });
          done();
        });
    });

    it("Criando como seller", (done) => {
      chai
        .request(server)
        .post("/admin")
        .set("authorization", token)
        .send(userSellerForCreate)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(201);
          expect(res.body).have.contains.key("user");
          expect(res.body.user).have.contains.keys(
            "name",
            "email",
            "role",
            "password"
          );
          expect(res.body.user.password).to.be.equal(
            hashPassword(userSellerForCreate.password)
          );
          expect(res.body).to.be.deep.equal({
            user: {
              ...userSellerForCreate,
              password: hashPassword(userSellerForCreate.password),
            },
          });
          done();
        });
    });
  });

  describe("Será validado que não é possível criar um usuário de qualquer tipo com sucesso quando", () => {
    let token;

    before((done) => {
      chai
        .request(server)
        .post("/login")
        .send(adminUser)
        .end((err, res) => {
          if (err) done(err);
          token = res.body.token;
          done();
        });
    });

    const user = {
      name: "Rogerinho da Vila Maria",
      email: "rogerinho@gmail.com",
      password: "123451",
      role: "customer",
    };
    describe("Dados forem mal formatados", () => {
      it("Será validado que não é possível criar um usuário sem o campo email", (done) => {
        chai
          .request(server)
          .post("/admin")
          .set("authorization", token)
          .send({ name: user.name, password: user.password })
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.be.equal(400);
            expect(res.body).to.be.deep.equal({
              message: 'child "email" fails because ["email" is required]',
            });
            done();
          });
      });

      it("Será validado que não é possível criar um usuário sem o campo password", (done) => {
        chai
          .request(server)
          .post("/admin")
          .set("authorization", token)
          .send({ name: user.name, email: user.email })
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.be.equal(400);
            expect(res.body).to.be.deep.equal({
              message:
                'child "password" fails because ["password" is required]',
            });
            done();
          });
      });

      it("Será validado que não é possível criar um usuário sem o campo name", (done) => {
        chai
          .request(server)
          .post("/admin")
          .set("authorization", token)
          .send({
            email: user.email,
            password: user.password,
            role: "customer",
          })
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.be.equal(400);
            expect(res.body).to.be.deep.equal({
              message: 'child "name" fails because ["name" is required]',
            });
            done();
          });
      });

      it("Será validado que não é possível criar um usuário sem o campo role", (done) => {
        chai
          .request(server)
          .post("/admin")
          .set("authorization", token)
          .send({ email: user.email, password: user.password, name: user.name })
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.be.equal(400);
            expect(res.body).to.be.deep.equal({
              message: 'child "role" fails because ["role" is required]',
            });
            done();
          });
      });
    });

    describe("Houver conflito de Usuários", () => {
      it("Será validado que não é possível criar um usuário que já existe", (done) => {
        chai
          .request(server)
          .post("/admin")
          .set("authorization", token)
          .send(user);

        chai
          .request(server)
          .post("/admin")
          .set("authorization", token)
          .send(user)
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.be.equal(409);
            expect(res.body).to.be.deep.equal({
              message: "User already registered",
            });
            done();
          });
      });
    });

    describe("Problemas com token", function () {
      let tokenFail;

      before((done) => {
        chai
          .request(server)
          .post("/login")
          .send(user)
          .end((err, res) => {
            if (err) done(err);
            tokenFail = res.body.token;
            done();
          });
      });

      it("Será validado que o token não existe", (done) => {
        chai
          .request(server)
          .post("/admin")
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.be.equal(401);
            expect(res.body).to.be.deep.equal({ message: "Token not found" });
            done();
          });
      });

      it("Será validado que o token não é valido", (done) => {
        chai
          .request(server)
          .post("/admin")
          .set("authorization", `${tokenFail} 11`)
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.be.equal(401);
            expect(res.body).to.be.deep.equal({
              message: "Expired or invalid token",
            });
            done();
          });
      });

      it("Será validado que o usuário não é administrator", (done) => {
        chai
          .request(server)
          .post("/login")
          .send({
            email: "rogerinho@gmail.com",
            password: "123451",
          })
          .end((err, res) => {
            if (err) done(err);
            tokenFail = res.body.token;
          });

        chai
          .request(server)
          .post("/admin")
          .send({
            name: "Rogerinho da Vila Maria3",
            email: "rogerinho3@gmail.com",
            password: "123451",
            role: "seller",
          })
          .set("authorization", tokenFail)
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.be.equal(401);
            expect(res.body).to.be.deep.equal({ message: "Unauthorized" });
            done();
          });
      });
    });
  });
});
