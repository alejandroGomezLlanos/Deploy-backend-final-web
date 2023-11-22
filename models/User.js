const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

	nombre: {
		type: String,
		required: true
	},
	correo: {
		type: String,
		required: true
	},
	clave: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model("User", userSchema)