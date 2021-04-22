//import router
const usersRouter = require("./users");
const bankRouter = require("./myBank");
const accountRouter = require("./account");
const mutationRouter = require("./mutation");

//export module
module.exports = {
  usersRouter,
  bankRouter,
  accountRouter,
  mutationRouter
};
