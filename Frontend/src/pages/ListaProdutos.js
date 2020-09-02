import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import Filtros from '../components/Filtros';
import Produtos from '../components/Produtos';
import { formatMoney } from '../helpers/formatacaoValores';

import api from '../Api';

export default function ListaProdutos() {
  const [todosProdutos, setTodosProdutos] = useState([]);
  const [produtosListados, setProdutosListados] = useState([]);

  useEffect(() => {
    const carregaValores = async () => {
      const dados = await api.get('/produtos');
      const produtos = dados.data.produtos.map(
        ({ _id, titulo, descricao, preco, imagem }) => {
          return {
            id: _id,
            titulo,
            descricao,
            preco,
            precoFormatado: formatMoney(preco),
            imagem,
          };
        }
      );

      produtos.sort((a, b) => {
        return a.titulo.localeCompare(b.titulo);
      });

      setTodosProdutos(produtos);
      setProdutosListados(Object.assign([], produtos));
    };

    carregaValores();
  }, []);

  const atualizaFiltroTitulo = (texto) => {
    const filtro = todosProdutos.filter((produto) => {
      return produto.titulo.toLowerCase().includes(texto);
    });
    setProdutosListados(filtro);
  };

  return (
    <div className="container">
      <header>
        <Menu lista={'menu-ativo'} carrinho={''} />
        <Filtros filtroTitulo={atualizaFiltroTitulo} />
        <Produtos produto={produtosListados} />
      </header>
    </div>
  );
}
