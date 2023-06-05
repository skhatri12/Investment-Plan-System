import mongoose from "mongoose";

const userRegistrationSchema = mongoose.Schema({

  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  confirmpassword: { type: String, required: true, trim: true },
}, { timestamps: true });


const userModel = mongoose.model("registration", userRegistrationSchema);

export default userModel;