const chai = require("chai");
const shell = require("shelljs");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../../api/app");

const { expect } = chai;


const newUser = {
  name: "Rogerinho da Vila Maria",
  email: "rogerinho@gmail.com",
  password: "123451",
}

const userNotAdmin = {
  email: "fulana@deliveryapp.com",
  password: "fulana@123",
};

const adminUser = {
  email: "adm@deliveryapp.com",
  password: "--adm2@21!!--",
};

describe("Get All Sales - Sua aplicação deve ter o endpoint GET `/seller/orders`", () => {
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
        .get("/seller/orders")
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
        .get("/seller/orders")
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

  describe("para caso de sucesso", () => {
    let token;
    let tokenNewUser;

    before((done) => {
      chai.request(server)
      .post('/user')
      .send(newUser)
      .end((err, res) => {
        if (err) done(err);
        tokenNewUser = res.body.token;
      });

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

    it("recebe um array de todas as vendas que pertencem a essa pessoa", (done) => {
      chai
        .request(server)
        .get("/seller/orders")
        .set("authorization", token)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(200);
          expect(res.body).to.be.a("array");
          res.body.map((obj) => expect(obj[0]).to.not.be.null);
          res.body.map((obj) => expect(obj).have.all.keys('id', 'totalPrice', 'deliveryAddress', 'deliveryNumber', 'saleDate', 'userId', 'sellerId', 'status', 'seller_id', 'user_id'));
          done();
        });
    });

    it("recebe um array vazio, caso a pessoa ainda não tenha vendas", (done) => {

      chai
        .request(server)
        .get("/seller/orders")
        .set("authorization", tokenNewUser)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(200);
          expect(res.body).to.be.a("array");
          expect(res.body).to.be.length(0);
          done();
        });
    });
  });
});
