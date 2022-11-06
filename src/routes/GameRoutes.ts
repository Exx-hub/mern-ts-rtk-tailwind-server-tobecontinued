import { Router } from "express";
import { createGame, getAllGames } from "../controllers/gameController";

const router: Router = Router();

// router.route("/").get(getAllGames);
// router.route("/").post(createGame);

router.route("/")
.get(getAllGames)
.post(createGame)

export default router;
