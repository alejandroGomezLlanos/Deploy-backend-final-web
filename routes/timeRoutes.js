const express = require("express");
const router = express.Router();

const timeController = require("../controllers/timeController");

router
  .route("/")
  .get(timeController.getTime)
  .patch(timeController.updateTime);
module.exports = router;