//import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myBankSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      minlength: 3,
      maxlength: 255,
    },
    accountNum: {
      type: String,
      required: [true, "accountNum is required"],
      minlength: 3,
      maxlength: 255,
    },
    currency: {
      type: String,
      required: true,
    },
    saving: {
      type: Number,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
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
    collection: "myBank",
  }
);

//export module
module.exports = mongoose.model("myBank", myBankSchema);
