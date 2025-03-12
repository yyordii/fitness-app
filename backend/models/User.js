const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  console.log("Pre-save middleware triggered"); // Add this line
  if (!this.isModified("password")) {
    console.log("Password not modified"); // Add this line
    return next();
  }
  try {
    console.log("Hashing password for user:", this.username); // Add this line
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    console.log("Password hashed:", this.password); // Add this line
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("User", UserSchema);