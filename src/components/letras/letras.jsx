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
            backGroundAtivo={`${classButton}${letrasAlfabeto.includes(letras) ? 'desativado' : ''}` }
            disabled={iniciarJogo || letrasAlfabeto.includes(letras) ? true : false}
            key={letras}
            onClick={() => salvarPalavra(letras)}
          >
            {letras.toUpperCase()}
          </Button>
        )
      })}
    </ContentLetras>
  )
}
