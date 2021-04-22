//import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    bank: {
      type: String,
      required: [true, "Bank is required"],
      minlength: 3,
      maxlength: 255,
    },
    accountNumber: {
      type: String,
      required: [true, "accountNumber is required"],
      minlength: 3,
      maxlength: 30,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
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
    collection: "account",
  }
);

//export module
module.exports = mongoose.model("account", accountSchema);
