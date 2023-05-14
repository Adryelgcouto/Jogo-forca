import { useState } from 'react'
import { ContentLetras, Button } from '../letras/letras.style'
export default function Letras({
  alfabeto,
  setLetrasAlfabeto,
  iniciarJogo,
  classButton,
  letrasAlfabeto,
  palavrasUnder,
  palavraArray,
  setPalavrasUnder,
  setContador,
  contador,
  setAtivo,
  setIniciarJogo
}) {
  function salvarPalavra(letras) {
    letrasAlfabeto.push(letras)
    setLetrasAlfabeto([...letrasAlfabeto])
    console.log(letrasAlfabeto)
    if (!palavraArray.includes(letras)) {
      contador += 1
      setContador(contador)
    }
    let temp = palavraArray.map(letra => {
      return letrasAlfabeto.includes(letra) ? letra.toUpperCase() : ' _'
    })
    setPalavrasUnder(temp)
    console.log(temp)

    if (contador > 5) {
      setAtivo('red')
      const inteiro = palavraArray.join('')
      setIniciarJogo(true)

      setPalavrasUnder(inteiro)
    } else if (temp.join('').toLowerCase() === palavraArray.join('')) {
      setAtivo('green')
      setIniciarJogo(true)
    }
  }
  console.log(palavrasUnder)
  return (
    <ContentLetras>
      {alfabeto.map((letras, indice) => {
        return (
          <Button
            backGroundAtivo={{classButton}}
            disabled={
              iniciarJogo || letrasAlfabeto.includes(letras) ? true : false
            }
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
