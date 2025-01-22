import express from "express";
import cors from "cors";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import { errorHandler } from "./middlewares/errorHandler";
import scriptsRoutes from "./routes/scriptRoutes";

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Basic health check
 */
app.get("/", (_req, res) => {
  res.send("Tdd team test deployment");
});

app.use("/api/scripts", scriptsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
