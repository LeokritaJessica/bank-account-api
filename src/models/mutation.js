//import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mutationSchema = new Schema(
  {
    myBank: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "myBank",
      },
    ],
    accountBank: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
      },
    ],
    debit: {
      type: Number,
      default: 0,
    },
    credit: {
      type: Number,
      default: 0,
    },
    desc: {
      type: String,
      required: [true, "desc is required"],
      maxlength: 255,
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
    collection: "mutation",
  }
);

//export module
module.exports = mongoose.model("mutation", mutationSchema);
