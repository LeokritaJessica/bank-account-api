//import data
const { myBankService } = require("../services");

//module exports
module.exports = {
  browse: async (req, res) => {
    
    try {
      const bankdata = await myBankService.browse();

      res.status(200).send({ data: bankdata});
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  add: async (req, res) => {
    const { body } = req;

    //create new user
    const myBankData = {
      ...body,
    };

    try {
      const savedBank = await myBankService.add(myBankData);
      res.send(savedBank);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
