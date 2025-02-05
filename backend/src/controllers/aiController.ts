import { Request, Response } from "express";
import { OpenAI } from "openai";

export const generateScript = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { message } = req.body;
  const openai = new OpenAI({
  });
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that generates MongoDB scripts based on user prompts and return only json with code field",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });
    const code = response.choices[0].message.content ?? "";
    res.status(201).json({ code });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
