import { Schema, model, models } from "mongoose";
const { v4: uuidv4 } = require("uuid");
const AnswerSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  Ans1: { type: String },
  Ans2: { type: String },
  Ans3: { type: String },
  Ans4: { type: String },
  Ans5: { type: String },
});

export const Answer = models?.Answer || (model("Answer", AnswerSchema));
