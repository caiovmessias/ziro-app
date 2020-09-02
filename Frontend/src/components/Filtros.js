import React, { useState, useEffect } from 'react';

export default function Filtros(props) {
  const filtroTitulo = (event) => {
    const textoFiltro = event.target.value.toLowerCase();
    props.filtroTitulo(textoFiltro);
  };

  return (
    <div className="filtros">
      <textarea
        className="filtro-titulo"
        id="titulo"
        placeholder="Titulo do Produto"
        rows="1"
        cols="30"
        onChange={filtroTitulo}
      ></textarea>
    </div>
  );
}
