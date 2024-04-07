// driverModel.js
const mongoose = require("mongoose");

// Định nghĩa schema cho collection "drivers"
const driverSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    referralCode: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  { timestamps: true }
);

// Tạo model từ schema
const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
