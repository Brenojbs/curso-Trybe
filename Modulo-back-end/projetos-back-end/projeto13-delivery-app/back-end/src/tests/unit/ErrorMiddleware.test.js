const sinon = require("sinon");
const { errorMiddleware } = require("../../middlewares");
const { expect } = require("chai")

const errorCustom = {
  statusCode: 404,
  message: "NotFound",
};

describe("Teste de Unidade do Middleware de error", () => {
  /**
   * Mocked Express Request object.
   */
  let req;

  /**
   * Mocked Express Response object.
   */
  let res;

  /**
   * Mocked Express Next function.
   */
  const next = sinon.spy();

  /**
   * Reset the `req` and `res` object before each test is ran.
   */
  beforeEach(() => {
    req = {
      params: {},
      body: {},
    };

    res = {
      data: null,
      code: null,
      status(status) {
        this.code = status;
        return this;
      },
      json(payload) {
        this.data = payload;
      },
    };
  });

  it("quando há um erro personalizado", () => {
    errorMiddleware(errorCustom, req, res, next);

    expect(res).have.property('code');
    expect(res.code).to.be.equal(404);
    expect(res.data).to.be.a('object');
    expect(res.data).to.be.deep.equal({ message: "NotFound" });
  });

  it("quando não há um erro personalizado", () => {
    errorMiddleware(new Error, req, res, next);

    expect(res).have.property("code");
    expect(res.code).to.be.equal(500);
    expect(res.data).to.be.a("object");
    expect(res.data).to.be.deep.equal({ message: "Internal error", });
  });
});
