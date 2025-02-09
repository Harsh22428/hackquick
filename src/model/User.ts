import mongoose, { Schema, Document } from "mongoose";

//because it will store as a document in the database thats why
//we are extending Document

//vese this message schema is not used in our project

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

// //Using the Message schema to create a new schema , it gives type safety
// const MessageSchema: Schema<Message> = new Schema({
//   content: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     required: true,
//     default: Date.now,
//   },
// });

//this is for the documents
interface UserDocument {
  name: String;
  url: String;
  status: {
    type: String;
    enum: ["pending", "approved", "rejected"];
    default: "pending";
  };
  uploadedAt: Date;
}

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  role: string;
  isVerified: boolean;
  documents: UserDocument[]; // for this we need to define UserDocument
}

const UserSchema: Schema<User> = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        "Please enter a valid email address",
      ],
    },
    password: { type: String, required: [true, "Passsword is required"] },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isVerified: { type: Boolean, default: false },
    documents: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
        status: {
          type: String,
          enum: ["pending", "approved", "rejected"],
          default: "pending",
        },
        uploadedAt: { type: Date, default: Date.now },
        reviewedAt: Date,
      },
    ],
  },
  { timestamps: true }
);

//NextJs dont know wheather this data is already present in the database or not
//So we need to export this model

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;

//nOW AFTER THIS we created schema folder and then in them we put zod validation
