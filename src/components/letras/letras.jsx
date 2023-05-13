import { useState } from 'react'
import { ContentLetras, Button } from '../letras/letras.style'
export default function Letras({
  alfabeto,
  salvarPalavra,
  iniciarJogo,
  classButton,
  letrasAlfabeto
}) {
  return (
    <ContentLetras>
      {alfabeto.map((letras, indice) => {
        return (
          <Button
            backGroundAtivo={`${classButton}${letrasAlfabeto.includes(indice) ? 'desativado' : ''}` }
            indice={indice}
            
            disabled={iniciarJogo || letrasAlfabeto.includes(indice) ? true : false}
            key={letras}
            onClick={() => salvarPalavra(indice)}
          >
            {letras.toUpperCase()}
          </Button>
        )
      })}
    </ContentLetras>
  )
}
