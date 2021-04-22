//import dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const { should } = chai;
should()

chai.use(chaiHttp);
const server = require("../index");

//import fake data
const feature = require("./feature/bank");

//Regis user
describe("POST | /api/v1/register | insert new user", async () => {
  const req = feature.regis();
  it("it should regis user", (done) => {
    chai
      .request(server)
      .post("/api/v1/register")
      .send(req)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("firstname").eql(req.firstname);
        res.body.should.have.property("lastname").eql(req.lastname);
        res.body.should.have.property("birth").eql(req.birth);
        done();
      });
  });
});


//add Mybank
describe("POST | /api/v1/bank | insert new bank", async () => {
  const req = feature.bank();
  it("it should data bank", (done) => {
    chai
      .request(server)
      .post("/api/v1/bank")
      .send(req)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("name").eql(req.name);
        res.body.should.have.property("accountNum").eql(req.accountNum);
        res.body.should.have.property("currency").eql(req.currency);
        res.body.should.have.property("saving").eql(req.saving);
        res.body.should.have.property("users").eql(req.users);
        done();
      });
  });
});

//add account
describe("POST | /api/v1/account | insert new account", async () => {
  const req = feature.account();
  it("it should data account", (done) => {
    chai
      .request(server)
      .post("/api/v1/account")
      .send(req)
      .end((err, res) => {
        // console.log(res)
        res.should.have.status(200);
        res.body.should.have.property("bank").eql(req.bank);
        res.body.should.have.property("accountNumber").eql(req.accountNumber);
        res.body.should.have.property("users").eql(req.users);
        done();
      });
  });
});

//add mutation
describe("POST | /api/v1/mutation | insert new mutation", async () => {
  const req = feature.mutation();
  it("it should data mutation", (done) => {
    chai
      .request(server)
      .post("/api/v1/mutation")
      .send(req)
      .end((err, res) => {
        // console.log(res)
        res.should.have.status(200);
        res.body.should.have.property("myBank").eql(req.myBank);
        res.body.should.have.property("accountBank").eql(req.accountBank);
        res.body.should.have.property("credit").eql(req.credit);
        res.body.should.have.property("desc").eql(req.desc);
        res.body.should.have.property("users").eql(req.users);
        done();
      });
  });
});