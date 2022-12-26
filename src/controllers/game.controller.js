const express = require("express");
const Game = require("../models/game.model");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const games = await Game.find().lean().exec();

    return res.status(200).send({ games: games }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id).lean().exec();
    return res.status(200).send(game);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await Game.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(item);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/",  async (req, res) => {

  try {
    const game = await Game.create(req.body);
    return res.status(200).send(game);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
