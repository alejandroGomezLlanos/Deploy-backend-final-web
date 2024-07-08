const mongoose = require("mongoose")

const timeSchema = new mongoose.Schema({
	time:{
		type: Number,
		required: true
	}
})

module.exports = mongoose.model("Time", timeSchema)