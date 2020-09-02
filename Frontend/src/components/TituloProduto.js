import React from 'react'

export default function TituloProduto({ titulo, classe }) {
  return (
    <span className={classe}>{titulo}</span>
  )
}
