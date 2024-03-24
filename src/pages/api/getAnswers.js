import { Answer } from "@/models/Answer";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    handlePost(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

async function handlePost(req, res) {
  try {
    const { Ans1, Ans2, Ans3, Ans4, Ans5 } = req.body;
    await mongoose.connect(process.env.MONGODB_URI);
    await Answer.create({
      Ans1: Ans1,
      Ans2: Ans2,
      Ans3: Ans3,
      Ans4: Ans4,
      Ans5: Ans5,
    });
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal server error' });
  }
}
