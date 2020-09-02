import React from 'react'

export default function PrecoProduto({ preco, classe }) {
  return (
    <span className={classe}>{ preco }</span>
  )
}
