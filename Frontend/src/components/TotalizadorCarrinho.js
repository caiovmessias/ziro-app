import React, { useState, useEffect } from 'react';
import { formatMoney } from '../helpers/formatacaoValores';

export default function TotalizadorCarrinho({ dados }) {
  const total = dados.reduce((acc, crr) => {
    const totalProduto = crr.preco * crr.quantidade;
    return totalProduto + acc;
  }, 0);

  return (
    <div className="totalizador">
      <span className="totalizador-texto totalizador-itens">Total</span>
      <span className="totalizador-valor totalizador-itens">{formatMoney(total)}</span>
    </div>
  );
}
