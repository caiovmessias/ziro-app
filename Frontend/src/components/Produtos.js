import React, { useState, useEffect } from 'react';
import ItemProduto from './ItemProduto';
import { formatMoney } from '../helpers/formatacaoValores';

import api from '../Api';

export default function Produtos(props) {
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);
  // Necessário criar este estado pois algumas vezes na mudança de 
  // "aba" os itens do carrinho não estavam sendo carregados
  const [auxiliar, setAuxiliar] = useState(0);
  const lista = [];

  const carregaValores = async () => {
    setAuxiliar(1);
    const dados = await api.get('/carrinho');
    const produtos = dados.data.carrinho.map(
      ({ _id, titulo, preco, quantidade }) => {
        return {
          id: _id,
          titulo,
          preco,
          precoFormatado: formatMoney(preco),
          quantidade,
        };
      }
    );

    setProdutosCarrinho(produtos);
  };

  if (auxiliar !== 1) {
    carregaValores();
  }

  useEffect(() => {
    carregaValores();
  }, []);


  const executaAcao = async ({ id, titulo, preco, precoFormatado }) => {
    const produto = {
      id,
      titulo,
      preco,
      precoFormatado,
      quantidade: 1,
    };

    const index = produtosCarrinho.findIndex(
      (produto) => produto.titulo === titulo
    );

    if (index >= 0) {
      const id = await buscaIdCarrinho(titulo);
      await api.delete(`/carrinho/${id}`);
      const carrinho = [...produtosCarrinho];
      carrinho.splice(index, 1);
      setProdutosCarrinho(carrinho);
    } else {
      await api.post('/carrinho', produto);
      const carrinho = [...produtosCarrinho, produto];
      setProdutosCarrinho(carrinho);
    }
  };

  const buscaIdCarrinho = async (titulo) => {
    const dados = await api.get('/carrinho');
    const produtos = dados.data.carrinho.map(
      ({ _id, titulo, preco, quantidade }) => {
        return {
          id: _id,
          titulo,
          preco,
          precoFormatado: formatMoney(preco),
          quantidade,
        };
      }
    );

    const index = produtosCarrinho.findIndex(
      (produto) => produto.titulo === titulo
    );
    return produtos[index].id;
  };

  props.produto.forEach((produto) => {
    lista.push(
      <ItemProduto
        key={produto.id}
        dados={produto}
        acao={executaAcao}
        carrinho={produtosCarrinho}
      />
    );
  });

  return <div>{lista}</div>;
}
