const chai = require("chai");
const shell = require("shelljs");
const chaiHttp = require("chai-http");
const crypto = require("crypto");

chai.use(chaiHttp);

const server = require("../../api/app");
const user = require("../../controllers/user");

const { expect } = chai;

const sellerUser = {
  email: "fulana@deliveryapp.com",
  password: "fulana@123",
};

describe("Get SaleById - Sua aplicação deve ter o endpoint GET `/seller/orders/:id", () => {
  before(() => {
    shell.exec(
      "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
    );
  });

  describe("para caso de sucesso", () => {
    let token;

    before((done) => {
      chai
        .request(server)
        .post("/login")
        .send(sellerUser)
        .end((err, res) => {
          if (err) done(err);
          token = res.body.token;
          done();
        });
    });

    it("recebe um objeto com informações da venda", (done) => {
      chai
        .request(server)
        .get("/seller/orders/1")
        .set("authorization", token)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(200);
          expect(res.body).to.be.a("object");
          expect(res.body).have.keys(
            "id",
            "totalPrice",
            "deliveryAddress",
            "deliveryNumber",
            "saleDate",
            "status",
            "user",
            "seller",
            "products"
          );
          expect(res.body.seller.role).to.be.equal("seller");
          done();
        });
    });
  });

  describe("para casos de erro", () => {
    let token;

    before((done) => {
      chai
        .request(server)
        .post("/login")
        .send(sellerUser)
        .end((err, res) => {
          if (err) done(err);
          token = res.body.token;
          done();
        });
    });

    it("Será validado que o token não existe", (done) => {
      chai
        .request(server)
        .get("/seller/orders/1")
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
        .get("/seller/orders/1")
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
  });
});
