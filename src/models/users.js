//import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "Firstname is required"],
      minlength: 3,
      maxlength: 255,
    },
    lastname: {
      type: String,
      required: [true, "Firstname is required"],
      minlength: 3,
      maxlength: 255,
    },
    birth: {
      type: Date,
      required: true,
    },
    account: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
      },
    ],
    myBank: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "myBank",
      },
    ],
    mutation: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "mutation",
      },
    ],
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

//export module
module.exports = mongoose.model("users", usersSchema);
