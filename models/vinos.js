


const mongoose = require("mongoose");

const vinosSchema = mongoose.Schema({
  producto: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
stock: {
    type: Number,
    required: true
  },

  costo: {
    type: Number,
    required: true,
  },
  precioventa: {
    type: Number,
    required: true,
  },

});

module.exports = mongoose.model('Vinos', vinosSchema);





