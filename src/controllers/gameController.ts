import { Request, Response } from "express";
import Game from "../models/Game";

const getAllGames = async (req: Request, res: Response) => {
  try {
    const gamesFound = await Game.find();

    if (!gamesFound.length) {
      return res.status(200).json({ message: "No games found.", data: [] });
    }

    return res.status(200).json({ message: "Success", data: gamesFound });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const createGame = async (req: Request, res: Response) => {
  const { name, address, numberOfPeople, fieldNumber } = req.body;

  const newGame = {
    name,
    address,
    numberOfPeople,
    date: new Date(),
    time: "time is now",
    fieldNumber,
  };

  try {
    await Game.create(newGame);
    res.status(201).json({ message: "New Game Created!", data: newGame });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, message: "Failed to create game." });
  }
};

export { getAllGames, createGame };
