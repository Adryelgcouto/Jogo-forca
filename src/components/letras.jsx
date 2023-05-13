import { useState } from 'react'

export default function Letras({ alfabeto, salvarPalavra, iniciarJogo, classButton }) {
  return (
    <section className="letras">
      {alfabeto.map((letras, indice) => {
        return (
          <button
            disabled={iniciarJogo}
            key={letras}
            className={`${classButton} desabilitado`}
            onClick={() => salvarPalavra(letras)}
          >
            {letras}
          </button>
        )
      })}
    </section>
  )
}
