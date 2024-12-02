import express from "express";
import {
  getScripts,
  getScriptById,
  createScript,
  updateScript,
  deleteScript,
} from "../controllers/scriptController";

const router = express.Router();

router.get("/", getScripts); // GET /api/scripts
router.get("/:id", getScriptById); // GET /api/scripts/:id
router.post("/", createScript); // POST /api/scripts
router.put("/:id", updateScript); // PUT /api/scripts/:id
router.delete("/:id", deleteScript); // DELETE /api/scripts/:id

export default router;
