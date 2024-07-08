const Time = require("../models/Time");
const asyncHandler = require("express-async-handler");

const getTime = asyncHandler(async (req, res) => {
  const time = await Time.find().select("-id").lean();
  if (!time) {
    return res.status(400).json({ message: "no hay tiempo" });
  }
  res.json(time);
});

const updateTime = asyncHandler(async (req, res) => {
  const { time } = req.body;

  if (time === undefined || typeof time !== 'number') {
    res.status(400);
    throw new Error('Please provide a valid time value.');
  }

  const timeEntry = await Time.findOne();

  if (!timeEntry) {
    res.status(404);
    throw new Error('No time entry found.');
  }

  timeEntry.time = time;
  await timeEntry.save();

  res.status(200).json({ message: 'Time updated successfully', time: timeEntry.time });
});

module.exports = {
  getTime,
  updateTime
};
