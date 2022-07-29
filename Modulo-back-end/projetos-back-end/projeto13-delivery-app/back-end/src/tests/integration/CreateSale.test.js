const chai = require("chai");
const shell = require("shelljs");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../../api/app");

const { expect } = chai;

const sale = {
  sellerId: 2,
  totalPrice: 8895,
  deliveryAddress: "Casa numero 0",
  deliveryNumber: "11111111",
  status: "Pendente",
};

const invalidSale = {
  sellerId: 2,
  // totalPrice: 8895,
  deliveryAddress: "Casa numero 0",
  deliveryNumber: "11111111",
  status: "Pendente",
};

const cart = [
  {
    id: 1,
    quantity: 2,
  },
  {
    id: 3,
    quantity: 1,
  },
];

const customerUser = {
  email: "zebirita@email.com",
  password: "$#zebirita#$",
};

describe("Post Sales and Sales-Products - Sua aplicação deve ter o endpoint Post `/customer/sales`", () => {
  before(() => {
    shell.exec(
      "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
    );
  });

  describe("Será validado que é possível criar uma sale de qualquer tipo com sucesso", () => {
    let token;

    before((done) => {
      chai
        .request(server)
        .post("/login")
        .send(customerUser)
        .end((err, res) => {
          if (err) done(err);
          token = res.body.token;
          done();
        });
    });

    it("Criando como uma sale como customer", (done) => {
      chai
        .request(server)
        .post("/customer/sales")
        .set("authorization", token)
        .send({ ...sale, cart })
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(201);
          expect(res.body).to.be.a("object");
          expect(res.body).have.keys(
            "deliveryAddress",
            "deliveryNumber",
            "products",
            "id",
            "saleDate",
            "sellerId",
            "status",
            "totalPrice",
            "userId"
          );
          expect(res.body.products).to.be.a("array");
          res.body.products.map((product) => {
            expect(product).to.be.a("object");
          });
          done();
        });
    });
  });

  describe('Será validade que não é possivel criar uma sale invalida', () => {
    let token;

    before((done) => {
      chai
        .request(server)
        .post("/login")
        .send(customerUser)
        .end((err, res) => {
          if (err) done(err);
          token = res.body.token;
          done();
        });
    });


    it('Faltando o campo totalPrice ', (done) => {
      chai
        .request(server)
        .post("/customer/sales")
        .set("authorization", token)
        .send({ ...invalidSale, cart })
        .end((err, res) => {
          if (err) done(err);
          expect(res.body).have.property('message');
          expect(res.status).to.equal(422);
          expect(res.body).to.be.deep.equal({message: "invalid data"});
          done();
        });
    });
  });
});
