const chai = require("chai");
const shell = require("shelljs");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../../api/app");

const { expect } = chai;

const userNotAdmin = {
  email: "fulana@deliveryapp.com",
  password: "fulana@123",
};

const adminUser = {
  email: "adm@deliveryapp.com",
  password: "--adm2@21!!--",
};

describe("Get All Users - Sua aplicação deve ter o endpoint GET `/user`", () => {
  before(() => {
    shell.exec(
      "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
    );
  });

  describe("para casos de erro", () => {
    let token;

    before((done) => {
      chai
        .request(server)
        .post("/login")
        .send(userNotAdmin)
        .end((err, res) => {
          if (err) done(err);
          token = res.body.token;
          done();
        });
    });

    it("Será validado que o token não existe", (done) => {
      chai
        .request(server)
        .get("/user")
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
        .get("/user")
        .set("authorization", `${token}asdasdas`)
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
        .get("/user")
        .set("authorization", token)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(401);
          expect(res.body).to.be.deep.equal({ message: "Role is not admin" });
          done();
        });
    });
  });

  describe("para caso de sucesso", () => {
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

    it("recebe um array de pessoas cadastradas", (done) => {
      chai
        .request(server)
        .get("/user")
        .set("authorization", token)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(200);
          expect(res.body).to.be.a("array");
          res.body.map((obj) => expect(obj[0]).to.not.be.null);
          done();
        });
    });
  });
});
