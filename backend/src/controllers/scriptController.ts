import { Request, Response, NextFunction } from "express";
import Script from "../models/script";

export const createScript = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { title, code, description, isFavorite  } = req.body;
    const script = new Script({ title, code,  description, isFavorite });
    await script.save();
    const refreshedData = await Script.find();
    res.status(201).json(refreshedData );
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
    const { title, code, description, lastUpdatedAt } = req.body;
    const script = await Script.findByIdAndUpdate(
      req.params.id,
      { title, code, description, lastUpdatedAt },
      { new: true }
    );
    const refreshedData = await Script.find();
    if (!script) {
      res.status(404).json({ message: "Script not found" });
    } else {
      res.status(200).json(refreshedData);
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
    const ids = req.params.ids.split(',');
    const script = await Script.deleteMany({ _id: { $in: ids } });
    const refreshedData = await Script.find();
    if (!script) {
        res.status(404).json({ message: "Script not found" });
    } else {
        res.status(200).json(refreshedData);
    }
  } catch (error) {
    next(error);
  }
};
