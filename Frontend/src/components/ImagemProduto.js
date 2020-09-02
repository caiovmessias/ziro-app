import React from 'react'

export default function ImagemProduto({ url }) {
  return (
    <div className="item-imagem">
      <img
        src={ url }
        className="img-produto"
      />
    </div>
  )
}
