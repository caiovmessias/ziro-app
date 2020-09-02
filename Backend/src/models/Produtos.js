const mongoose = require('../database');

const produtoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
  },
  preco: {
    type: Number,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
});

const Produto = mongoose.model('Produtos', produtoSchema);

module.exports = Produto;
