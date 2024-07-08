const Time = require("../models/Time");
const asyncHandler = require("express-async-handler");

const getTime = asyncHandler(async (req, res) => {
  //llamamos a la base de mongo, que nos pase usuarios sin recibir toda la info de como
  //manjear datos usando "lean"
  //el select es para que no nos pase ese dato
  const time = await Time.find().select("-id").lean();
  if (!time) {
    return res.status(400).json({ message: "no hay tiempo" });
  }
  res.json(time);
});

const updateTime = asyncHandler(async (req, res) => {
    const { time } = req.body;

    // Validar que se ha proporcionado un valor de tiempo
    if (time === undefined || typeof time !== 'number') {
        res.status(400);
        throw new Error('Please provide a valid time value.');
    }

    // Buscar el único documento en la colección Time
    const timeEntry = await Time.findOne();

    if (!timeEntry) {
        res.status(404);
        throw new Error('No time entry found.');
    }

    // Actualizar el valor de time
    timeEntry.time = time;
    await timeEntry.save();

    res.status(200).json({ message: 'Time updated successfully', time: timeEntry.time });
});

module.exports = {
  getTime,
  updateTime
};