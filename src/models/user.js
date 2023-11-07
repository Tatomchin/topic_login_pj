import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide E-Mail!"],
  },
  password: {
    type: String,
    required: [true, "Please provide Password!"],
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
      next();
    })
    .catch((error) => {
      console.error(error);
    });
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
