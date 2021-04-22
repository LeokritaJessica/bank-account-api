//import data
const { mutationModels, myBankModels, usersModels } = require("../models");

//module exports
module.exports = {
  browse: async () => {
    //create new myBank
    const findAll = await mutationModels
      .find({
        users: "607fea24a0f749f89b10768b",
        myBank: "608020c6de48f13bf7dfd333",
      })
      .populate({ path: "users", select: ["firstname", "lastname", "birth"] })
      .populate({ path: "myBank", select: ["name","currency","saving"] })
      .populate({ path: "accountBank", select: ["bank"] })
    
    return findAll;
  },
  add: async (mutationData) => {
    //create new histori
    const histori = new mutationModels({
      ...mutationData,
    });
    let userid = await usersModels.findById(mutationData.users);
    let bankid = await myBankModels.findById(mutationData.myBank);
    userid.mutation.push(histori);
    bankid.mutation.push(histori);
    await userid.save();
    await bankid.save();
    await histori.save();
    let bank = await myBankModels.findById(mutationData.myBank);
    bank.saving += histori.debit - histori.credit;
    await bank.save();
    return histori;
  },
};
