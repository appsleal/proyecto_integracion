const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  apellido: {
    type: String,
    require: true,
  },
  numeroIdentificacion: {
    type: String,
    require: true,
  },
  programa: {
    type: String,
    require: true,
  },
  modalidadPractica: {
    type: String,
    require: true,
  },
  fechaInicio: {
    type: Date,
  },
  fechaFinalizacion: {
    type: Date,
  },
});

module.exports = mongoose.model('User', UserModelSchema)

