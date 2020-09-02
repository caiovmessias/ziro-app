import React from 'react';
import { MdAdd, MdRemove, MdDeleteForever } from 'react-icons/md';
import TituloProduto from './TituloProduto';
import PrecoProduto from './PrecoProduto';

export default function ItemCarrinho({ dados, removerItem, aumentar, diminuir }) {
  const { id, titulo, precoFormatado, quantidade } = dados;

  const clickRemove = () => {
    removerItem(id);
  };

  const aumentaQuantidade = () => {
    aumentar(id);
  }
  const diminuiQuantidade = () => {
    diminuir(id);
  }

  return (
    <div className="item-carrinho">
      <button
        className="remove-item-carrinho botao-esvaziar"
        onClick={clickRemove}
      >
        <MdDeleteForever className="icone-remove-carrinho" />
      </button>
      <TituloProduto titulo={titulo} classe="carrinho-titulo-produto" />
      <PrecoProduto preco={precoFormatado} classe="carrinho-preco-produto" />
      <div className="controles-carrinho">
        <button className="botao-controle botao-adicionar" onClick={aumentaQuantidade}>
          <MdAdd className="icone-controle" />
        </button>
        <span>{quantidade}</span>
        <button className="botao-controle botao-remover" onClick={diminuiQuantidade}>
          <MdRemove className="icone-controle" />
        </button>
      </div>
    </div>
  );
}
