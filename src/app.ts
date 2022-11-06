import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app: Application = express();
app.use(express.json());

app.use(cors());

// import routes
import GameRoutes from "./routes/GameRoutes";

// route paths
app.get("/", (req: Request, res: Response) => {
  res.send("testinggg!");
});

app.use("/api/games", GameRoutes);

export { app };
