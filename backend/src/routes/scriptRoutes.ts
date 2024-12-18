import express from "express";
import {
  getScripts,
  getScriptById,
  createScript,
  updateScript,
  deleteScript,
  markFavorite,
  unMarkFavorite,
} from "../controllers/scriptController";
import { generateScript } from "../controllers/aiController";

const router = express.Router();

router.route("scripts").get();
router.get("/", getScripts); // GET /api/scripts
router.post("/ai", generateScript);
router.get("/:id", getScriptById); // GET /api/scripts/:id
router.post("/", createScript); // POST /api/scripts
router.put("/:id", updateScript); // PUT /api/scripts/:id
router.delete("/:ids", deleteScript); // DELETE /api/scripts/:id
router.put("/markFavorite/:id", markFavorite); // PUT /api/scripts/markFavorite/:id
router.put("/unMarkFavorite/:id", unMarkFavorite); // PUT /api/scripts/unMarkFavorite/:id

export default router;
