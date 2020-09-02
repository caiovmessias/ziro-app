import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ImagemProduto from './ImagemProduto';
import TituloProduto from './TituloProduto';
import PrecoProduto from './PrecoProduto';

export default function ItemProduto({ dados, acao, carrinho }) {
  const [classeButton, setClasseButton] = useState('botao-adicionar');
  const [textoButton, setTextoButton] = useState('Adicionar');
  const { titulo, descricao, imagem, precoFormatado } = dados;

  useEffect(() => {
    const carregaValores = async () => {
      const existeCarrinho = await carrinho.find((produto) => produto.titulo === titulo);
      if (!existeCarrinho) {
        setClasseButton('botao-adicionar');
        setTextoButton('Adicionar');
      } else {
        setClasseButton('botao-remover');
        setTextoButton('Remover');
      }
    }

    carregaValores();
  }, []);

  const clickBotao = () => {
    const existeCarrinho = carrinho.some((produto) => produto.titulo === titulo);
    if (existeCarrinho) {
      setClasseButton('botao-adicionar');
      setTextoButton('Adicionar');
    } else {
      setClasseButton('botao-remover');
      setTextoButton('Remover');
    }
    acao(dados);
  };

  return (
    <div className="item-produto">
      <ImagemProduto url={imagem} />
      <div className="item-titulo-descricao">
        <TituloProduto titulo={titulo} classe="titulo-produto" />
        <span className="descricao-produto">{descricao}</span>
      </div>
      <div className="item-valor-carrinho">
        <PrecoProduto preco={precoFormatado} classe="preco-produto" />
        <button onClick={clickBotao} className={classeButton} type="button">
          <FaShoppingCart className="icone-adicionar" />
          {textoButton}
        </button>
      </div>
    </div>
  );
}
