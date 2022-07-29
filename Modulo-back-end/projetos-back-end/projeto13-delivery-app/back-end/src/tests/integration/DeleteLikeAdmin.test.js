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
};


describe("Delete User Like Admin - Sua aplicação deve ter o endpoint DELETE `/admin/:id`", () => {
  before(() => {
    shell.exec(
      "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
    );
  });

  describe("Será validado que é possível deletar um usuário de qualquer tipo com sucesso", () => {
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

    it("deletando um user ", (done) => {
      chai
        .request(server)
        .delete("/admin/2")
        .set("authorization", token)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(204);
          expect(res.body).to.be.deep.equal({});
          done();
        });
    });
  });

  describe("Será validado que não é possível deletar um usuário de qualquer quando", () => {
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

    describe("O usuário não Existir", () => {
      it("Retorna Not Found", (done) => {

        chai
          .request(server)
          .delete("/admin/111111111")
          .set("authorization", token)
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.be.equal(404);
            expect(res.body).to.be.deep.equal({
              message: "User not exists",
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
          .post("/user")
          .send(userCustomerForCreate)
          .end((err, res) => {
            if (err) done(err);
            tokenFail = res.body.token;
            done();
          });
      });

      it("Será validado que o token não existe", (done) => {
        chai
          .request(server)
          .delete("/admin/1")
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
          .delete("/admin/1")
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
          .delete("/admin/1")
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
