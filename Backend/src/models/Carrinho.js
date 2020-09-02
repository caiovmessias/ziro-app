const mongoose = require('../database');

const carrinhoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Carrinho = mongoose.model('Carrinho', carrinhoSchema);

module.exports = Carrinho;
