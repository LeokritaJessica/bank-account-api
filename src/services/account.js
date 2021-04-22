//import data
const { accountModels, usersModels } = require("../models");

//module exports
module.exports = {
  add: async (accountData) => {
    //create new myBank
    const account = new accountModels(accountData);
    const userid = await usersModels.findById(accountData.users)
    userid.account.push(account);
    await userid.save();
    return await account.save();
  },
};
