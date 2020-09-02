const express = require('express');
const Produto = require('./models/Produtos.js');
const Carrinho = require('./models/Carrinho.js');
const bodyParser = require('body-parser');

const cors = require('cors')
const app = express()
 
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Rota Produtos
app.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.find();

    return res.send({ produtos });
  } catch (err) {
    return res.status(400).send({ error: 'Listagem de produtos falhou' });
  }
});

app.post('/produtos', async (req, res) => {
  try {
    const produto = await Produto.create(req.body);

    return res.send({ produto });
  } catch (err) {
    return res.status(400).send({ error: 'Cadastro de produto falhou' });
  }
});

app.put('/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send({ produto });
  } catch (err) {
    return res.status(400).send({ error: 'Atualização de produto falhou' });
  }
});

app.delete('/produtos/:id', async (req, res) => {
  try {
    await Produto.findByIdAndRemove(req.params.id);

    return res.send();
  } catch (err) {
    return res.status(400).send({ error: 'Exclusão de produto falhou' });
  }
});

// Rota carrinho
app.get('/carrinho', async (req, res) => {
  try {
    const carrinho = await Carrinho.find();

    return res.send({ carrinho });
  } catch (err) {
    return res
      .status(400)
      .send({ error: 'Listagem de produtos do carrinho falhou' });
  }
});

app.post('/carrinho', async (req, res) => {
  try {
    const carrinho = await Carrinho.create(req.body);

    return res.send({ carrinho });
  } catch (err) {
    return res.status(400).send({ error: 'Adicionar ao Carrinho falhou' });
  }
});

app.put('/carrinho/:id', async (req, res) => {
  try {
    const carrinho = await Carrinho.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send({ carrinho });
  } catch (err) {
    return res
      .status(400)
      .send({ error: 'Atualização de produto no carrinho falhou' });
  }
});

app.delete('/carrinho/:id', async (req, res) => {
  try {
    await Carrinho.findByIdAndRemove(req.params.id);

    return res.send();
  } catch (err) {
    return res
      .status(400)
      .send({ error: 'Exclusão de produto do carrinho falhou' });
  }
});

app.listen(3000, () => {
  console.log('API Started');
});
