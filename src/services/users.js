//import data
const { usersModels } = require("../models");

//module exports
module.exports = {
  register: async (userData) => {
    //create new user
    const user = new usersModels(userData);
    return await user.save();
  },
};
