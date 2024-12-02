import { Request, Response, NextFunction } from "express";
import Script from "../models/script";

export const createScript = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, code } = req.body;
    const script = new Script({ name, code });
    await script.save();
    res.status(201).json(script);
  } catch (error) {
    next(error);
  }
};

export const getScripts = async (
  req: Request,
  res: Response,
  next: NextFunction
 ): Promise<void> => {
  try {
    const scripts = await Script.find();
    res.status(200).json(scripts);
  } catch (error) {
    next(error);
  }
};

export const getScriptById = async (
  req: Request,
  res: Response,
  next: NextFunction
) : Promise<void> => {
  try {
    const script = await Script.findById(req.params.id);
    if (!script) {
     res.status(404).json({ message: "Script not found" });
    } else {
      res.status(200).json(script);
    }
  } catch (error) {
    next(error);
  }
};

export const updateScript = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> =>{
  try {
    const { name, code } = req.body;
    const script = await Script.findByIdAndUpdate(
      req.params.id,
      { name, code },
      { new: true }
    );
    if (!script) {
      res.status(404).json({ message: "Script not found" });
    } else {
      res.status(200).json(script);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteScript = async (
  req: Request,
  res: Response,
  next: NextFunction
) : Promise<void> => {
  try {
    const script = await Script.findByIdAndDelete(req.params.id);
    if (!script) {
        res.status(404).json({ message: "Script not found" });
    } else {
        res.status(200).json({ message: "Script deleted successfully" });
    }
  } catch (error) {
    next(error);
  }
};
