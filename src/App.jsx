import Jogo from './components/jogo/jogo'
import Letras from './components/letras/letras'
import palavras from './palavras'
import alfabeto from './components/alfabeto'
import { useState } from 'react'
import { Content } from './App.style'

import comeco0 from '../src/assets/forca0.png'
import comeco1 from '../src/assets/forca1.png'
import comeco2 from '../src/assets/forca2.png'
import comeco3 from '../src/assets/forca3.png'
import comeco4 from '../src/assets/forca4.png'
import comeco5 from '../src/assets/forca5.png'
import comeco6 from '../src/assets/forca6.png'
export default function App() {
  let [letrasAlfabeto, setLetrasAlfabeto] = useState([])
  let [iniciarJogo, setIniciarJogo] = useState(true)
  let [classButton, setClassButton] = useState('desativado')
  let [palavraSorteada, setPalavraSorteada] = useState('')
  let [buttonIncial, setButtonIncial] = useState(false)
  let [forcaArray, setForcaArray] = useState([
    comeco0,
    comeco1,
    comeco2,
    comeco3,
    comeco4,
    comeco5,
    comeco6
  ])
  let [palavrasUnder, setPalavrasUnder] = useState('')
  const palavraArray = palavraSorteada.split('')
  let [contador, setContador] = useState(0)
  let [ativo, setAtivo] = useState('')

  console.log(palavraArray)
  /*  for (let i = 0; i < letrasAlfabeto.length; i++) {
    if (letrasAlfabeto.includes(correto[i]) ) {
      ativo = 'green'
    }
  } */
  /*   if(correto === palavraArray){
    ativo = 'green'
  } */
  function comecaJogo() {
    buttonIncial = true
    letrasAlfabeto = []
    setContador(0)
    setAtivo('')
    setLetrasAlfabeto(letrasAlfabeto)
    iniciarJogo = false
    classButton = ''
    setButtonIncial(buttonIncial)
    setIniciarJogo(iniciarJogo)
    setClassButton(classButton)
    const sorteio = Math.floor(Math.random() * palavras.length)
    palavraSorteada = palavras[sorteio]
    setPalavraSorteada(palavraSorteada)
    palavrasUnder = palavraSorteada.split('').map(letra => {
      return letrasAlfabeto.includes(letra) ? letra.toUpperCase() : ' _'
    })
    setPalavrasUnder(palavrasUnder)
  }

  return (
    <Content>
      <Jogo
        comecaJogo={comecaJogo}
        buttonIncial={buttonIncial}
        palavraArray={palavraArray}
        letrasAlfabeto={letrasAlfabeto}
        forcaArray={forcaArray}
        contador={contador}
        Ativo={ativo}
        palavrasUnder={palavrasUnder}
      />
      <Letras
        setIniciarJogo={setIniciarJogo}
        setAtivo={setAtivo}
        ativo={ativo}
        setLetrasAlfabeto={setLetrasAlfabeto}
        setPalavrasUnder={setPalavrasUnder}
        setContador={setContador}
        contador={contador}
        palavraArray={palavraArray}
        palavrasUnder={palavrasUnder}
        alfabeto={alfabeto}
        letrasAlfabeto={letrasAlfabeto}
        iniciarJogo={iniciarJogo}
        classButton={classButton}
      />
    </Content>
  )
}
