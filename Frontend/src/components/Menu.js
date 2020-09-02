import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegListAlt, FaShoppingCart, FaCogs } from 'react-icons/fa';

export default function Menu({lista, carrinho}) {
  return (
    <div className="menu">
      <Link to="/">
        <div className="menu-lista menu-item">
          <FaRegListAlt className="menu-icone"/>
          <span className={lista}>Lista de Produtos</span>
        </div>
      </Link>
      <Link to="/carrinho">
        <div className="menu-carrinho menu-item">
          <FaShoppingCart className="menu-icone"/>
          <span className={carrinho}>Carrinho de Compras</span>
        </div>
      </Link>
    </div>
  );
}
