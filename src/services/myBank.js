//import data
const { myBankModels, usersModels } = require("../models");

//module exports
module.exports = {
  browse: async () => {
    //create new myBank
    const findAll = await myBankModels
      .find({
        users: "607fea24a0f749f89b10768b",
      })
      .populate({ path: "users", select: ["firstname", "lastname", "birth"] })
      .populate({ path: "mutation", select:["created_at"] })
      ;
    return findAll;
  },
  add: async (myBankData) => {
    //create new myBank
    const myBank = new myBankModels(myBankData);
    await myBank.save();
    let userid = await usersModels.findById(myBankData.users);
    userid.myBank.push(myBank);
    await userid.save();
    return myBank;
  },
};
