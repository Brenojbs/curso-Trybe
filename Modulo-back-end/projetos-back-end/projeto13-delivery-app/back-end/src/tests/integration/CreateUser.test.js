const chai = require("chai");
const shell = require("shelljs");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../../api/app");

const { expect } = chai;

const user = {
  name: "Rogerinho da Vila Maria",
  email: "rogerinho@gmail.com",
  password: "123451",
};

describe("Create User - Sua aplicação deve ter o endpoint POST `/user`", () => {
  before(() => {
    shell.exec(
      "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
    );
  });

  describe("Para caso de sucesso:", () => {
    it("Recebe o token do usuário cadastrado", (done) => {
      chai
        .request(server)
        .post("/user")
        .send(user)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(201);
          expect(res.body).to.be.a("object");
          expect(res.body).have.property("token");
          expect(res.body.token).length.be.greaterThan(100);
          done();
        });
    });
  });

  describe("Para caso de erro:", () => {
    it("Será validado que não é possível criar um usuário sem o campo email", (done) => {
      chai
        .request(server)
        .post("/user")
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
        .post("/user")
        .send({ name: user.name, email: user.email })
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(400);
          expect(res.body).to.be.deep.equal({
            message: 'child "password" fails because ["password" is required]',
          });
          done();
        });
    });

    it("Será validado que não é possível criar um usuário sem o campo name", (done) => {
      chai
        .request(server)
        .post("/user")
        .send({ email: user.email, password: user.password })
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(400);
          expect(res.body).to.be.deep.equal({
            message: 'child "name" fails because ["name" is required]',
          });
          done();
        });
    });

    it("Será validado que não é possível criar um usuário que já existe", (done) => {
      chai
        .request(server)
        .post("/user")
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
});
