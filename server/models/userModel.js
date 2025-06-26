import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkID: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  photo: { type: String },
  email: { type: String },
  credits: { type: Number, default: 5 },
});

const userModel = mongoose.models.user || mongoose.model("User", userSchema);

export default userModel;
