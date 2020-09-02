import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import ItemCarrinho from '../components/ItemCarrinho';
import TotalizadorCarrinho from '../components/TotalizadorCarrinho';
import { formatMoney } from '../helpers/formatacaoValores';

import api from '../Api';

export default function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const lista = [];

  useEffect(() => {
    const carregaValores = async () => {
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

      produtos.sort((a, b) => {
        return a.titulo.localeCompare(b.titulo);
      });

      setItensCarrinho(produtos);
    };

    carregaValores();
  }, []);

  const clickRemove = async (id) => {
    await api.delete(`/carrinho/${id}`);
    const index = itensCarrinho.findIndex((produto) => produto.id === id);
    const carrinho = [...itensCarrinho];
    carrinho.splice(index, 1);
    setItensCarrinho(carrinho);
  };

  const clickDiminuir = async (id) => {
    const index = itensCarrinho.findIndex((produto) => produto.id === id);
    const produtoQuantidadeAlterar = itensCarrinho[index];
    if (produtoQuantidadeAlterar.quantidade > 1) {
      produtoQuantidadeAlterar.quantidade--;
      await api.put(`/carrinho/${produtoQuantidadeAlterar.id}`, produtoQuantidadeAlterar);
    }
    const carrinho = [...itensCarrinho];
    carrinho.splice(index, 1, produtoQuantidadeAlterar);
    setItensCarrinho(carrinho);
  };

  const clickAcrescentar = async (id) => {
    const index = itensCarrinho.findIndex((produto) => produto.id === id);
    const produtoQuantidadeAlterar = itensCarrinho[index];
    produtoQuantidadeAlterar.quantidade++;
    await api.put(`/carrinho/${produtoQuantidadeAlterar.id}`, produtoQuantidadeAlterar);
    const carrinho = [...itensCarrinho];
    carrinho.splice(index, 1, produtoQuantidadeAlterar);
    setItensCarrinho(carrinho);
  };

  const esvaziarCarrinho = () => {
    setItensCarrinho([]);
  };

  if (itensCarrinho.length > 0) {
    itensCarrinho.forEach((item) => {
      lista.push(
        <ItemCarrinho
          key={item.id}
          dados={item}
          removerItem={clickRemove}
          aumentar={clickAcrescentar}
          diminuir={clickDiminuir}
        />
      );
    });
  } else {
    lista.push(
      <p className="carrinho-vazio" key="1">
        Seu carrinho está vazio. Adicione itens para confirmar a compra!
      </p>
    );
  }

  return (
    <div className="container">
      <header>
        <Menu lista={''} carrinho={'menu-ativo'} />
      </header>
      {lista}
      <TotalizadorCarrinho dados={itensCarrinho} />
    </div>
  );
}
