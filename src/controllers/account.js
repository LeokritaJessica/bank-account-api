//import data
const { accountService } = require("../services");

//module exports
module.exports = {
  add: async (req, res) => {
    const { body } = req

    //create new user
    const accountData = {
      ...body,
    };

    try {
      const savedAccount = await accountService.add(accountData);
      res.send(savedAccount);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
