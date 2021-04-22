//import data
const { usersService } = require("../services");

//module exports
module.exports = {
  register: async (req, res) => {
    const { body } = req;

    //create new user
    const userData = {
      ...body,
    };

    try {
      const savedUser = await usersService.register(userData);
      res.send(savedUser);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
