//import dependencies
require("dotenv").config();

//import server
const server = require("./src/server");

//dotenv
const { PORT, NODE_ENV } = process.env;

//start server
server.listen(PORT, () =>
  console.log(
    `Server is running on port http://localhost:${PORT} and use ${NODE_ENV}`
  )
);

//export module
module.exports = server