const chai = require("chai");
const shell = require("shelljs");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);


const server = require("../../api/app");

const { expect } = chai;

const adminUser = {
  email: "adm@deliveryapp.com",
  password: "--adm2@21!!--",
};

describe("Get One User By Email - Ao chamar a função GetUserByEmail", () => {
  before(() => {
    shell.exec(
      "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
    );
  });

  describe("para casos de erro", () => {

    it("Caso não encontre nenhum Usuário com o Email", (done) => {
      chai
        .request(server)
        .get("/user/@")
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(404);
          expect(res.body).to.be.deep.equal({ message: "User not found" });
          done();
        });
    });
  });

  describe("para caso de sucesso", () => {
    it("recebe um Objeto do User ", (done) => {
      chai
        .request(server)
        .get(`/user/${adminUser.email}`)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(200);
          expect(res.body).have.contains.keys(
            'id',
            "name",
            "email",
            "role",
            "password"
          );
          done();
        });
    });
  });
});
