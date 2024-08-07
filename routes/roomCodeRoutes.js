const express = require("express");
const router = express.Router();

const roomController = require("../controllers/codigoSalaController");

router
  .route("/")
  .post(roomController.postSymbol)
  .get(roomController.getRoomCode)
  .patch(roomController.updateSymbol)
  .put(roomController.putRoom)

module.exports = router;
