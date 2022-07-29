const chai = require("chai");
const shell = require("shelljs");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../../api/app");

const { expect } = chai;

describe("Get One Product - Sua aplicação deve ter o endpoint GET `/customer/products/:id`", () => {
  before(() => {
    shell.exec(
      "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
    );
  });

  describe("Caso de sucesso", () => {

    it("recebe um objeto do primeiro produto", (done) => {
      chai
        .request(server)
        .get("/customer/products/1")
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(200);
          expect(res.body).to.be.a("object");
          expect(res.body).have.all.keys("id", "name", "price", "url_image");
          done();
        });
    });
  });

  describe("Caso de Erro", () => {

    it("recebe uma mensagem de erro dizendo que o produto não foi encontrado", (done) => {
      chai
        .request(server)
        .get("/customer/products/0")
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(404);
          expect(res.body).to.be.a("object");
          expect(res.body).to.be.deep.equal({ message: "product not found" });
          done();
        });
    });

  })
});
