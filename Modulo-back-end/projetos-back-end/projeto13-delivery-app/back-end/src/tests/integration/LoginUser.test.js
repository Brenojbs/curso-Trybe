const chai = require("chai");
const shell = require("shelljs");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../../api/app");

const { expect } = chai;

const user = {
  email: "fulana@deliveryapp.com",
  password: "fulana@123",
};

describe("Login - Sua aplicação deve ter o endpoint POST `/login`", () => {
  before(() => {
    shell.exec(
      "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
    );
  });

  it("Será validado que é possível fazer login com sucesso", (done) => {
    chai
      .request(server)
      .post("/login")
      .send(user)
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.a("object");
        expect(res.body).have.property("token");
        expect(res.body.token).length.be.greaterThan(50);
        done();
      });
  });

  it("Será validado que não é possível fazer login sem o campo email", (done) => {
    chai
      .request(server)
      .post("/login")
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

  it("Será validado que não é possível fazer login sem o campo password", (done) => {
    chai
      .request(server)
      .post("/login")
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

  it("Será validado que não é possível fazer login de um usuário que não existe", (done) => {
    chai
      .request(server)
      .post("/login")
      .send({ email: `${user.email} 1`, password: user.password })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.be.equal(404);
        expect(res.body).to.be.deep.equal({ message: "Invalid fields" });
        done();
      });
  });
});
