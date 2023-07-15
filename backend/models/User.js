const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,

  email: {
    type: String,
    required: [true, "email is required"],
    lowercase: true,
  },

  password: String,
  passwordConfirmation:String,
  gender: {type: String, enum:["male", "female", "Prefer not to say"]},

  role: {
    type: String,
    enum: ["volunteer", "admin", "SuperAdmin"],
    default: "volunteer",
  },
  image:String,
  address: String,
  phone:String,
  isBanned: { type: Boolean, default: false },
  registredOn: { type: Date, default: Date.now() },
});

module.exports = User = mongoose.model("user", userSchema);
