//import data faker
const faker = require('faker')

function regis() {
  return {
    firstname : faker.name.firstName(),
    lastname: faker.name.lastName(),
    birth: faker.date.past(10, new Date(2001, 0, 1)).toISOString(),
  }
}

function bank() {
  let userId = ["607fea24a0f749f89b10768b"];
  return {
    name: faker.company.companyName(),
    accountNum: faker.finance.creditCardNumber(),
    currency: faker.finance.currencyCode(),
    saving: Math.round(faker.finance.amount(1, 10000, 2)),
    users: userId,
  };
}

function account() {
  let userId = ["607fea24a0f749f89b10768b"];
  return {
    bank: faker.company.companyName(),
    accountNumber: faker.finance.creditCardNumber(),
    users: userId
  }
}

function mutation() {
  let userId = ["607fea24a0f749f89b10768b"];
  let myBank = ["608020c6de48f13bf7dfd333"];
  let accountBank = ["60814f42aae306291639c7a4"];

  return {
    myBank: myBank,
    accountBank: accountBank,
    credit: Math.round(faker.finance.amount()),
    desc: faker.finance.transactionDescription(),
    users: userId,
  };
}

//module exports
module.exports = {
  regis,
  bank,
  account,
  mutation,
}