import express from "express";
import cors from "cors";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import { errorHandler } from "./middlewares/errorHandler";
import scriptsRoutes from "./routes/scriptRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/scripts", scriptsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
