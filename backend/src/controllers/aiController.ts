import { OpenAI } from "openai";
import { Request, Response, NextFunction } from "express";

export const generateScript = async (req: Request, res: Response): Promise<void> => {
  const { message } = req.body;
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates MongoDB scripts based on user prompts and return only json with code field"
        },
        {
          role: "user",
          content: message
        }
      ]
    });
    const code = JSON.parse(response.choices[0].message.content ?? "{}");

    res.status(201).json(code);
  } catch (error) {
    throw error;
  }
};