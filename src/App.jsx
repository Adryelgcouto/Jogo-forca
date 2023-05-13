import Jogo from './components/jogo/jogo'
import Letras from './components/letras/letras'
import palavras from './palavras'
import alfabeto from './components/alfabeto'
import { useState } from 'react'
import { Content } from './App.style'

export default function App() {
  let [letrasAlfabeto, setLetrasAlfabeto] = useState([])
  let [iniciarJogo, setIniciarJogo] = useState(true)
  let [classButton, setClassButton] = useState('desativado')
  let [palavraSorteada, setPalavraSorteada] = useState('')
  let [buttonIncial, setButtonIncial] = useState(false)
  const palavraArray = palavraSorteada.split("")
  function salvarPalavra(indice) {
    letrasAlfabeto.push(indice)
    setLetrasAlfabeto([...letrasAlfabeto])
    console.log(letrasAlfabeto)
    
  }
  function comecaJogo() {
    buttonIncial = true
    iniciarJogo = false
    classButton = ''
    setButtonIncial(buttonIncial)
    setIniciarJogo(iniciarJogo)
    setClassButton(classButton)
    const sorteio = Math.floor(Math.random() * palavras.length)
    palavraSorteada = palavras[sorteio]
    setPalavraSorteada(palavraSorteada)
  }
  
  return (
    <Content>
      <Jogo
        palavras={palavras}
        comecaJogo={comecaJogo}
        buttonIncial={buttonIncial}
        palavraArray={palavraArray}
      />
      <Letras
        alfabeto={alfabeto}
        letrasAlfabeto={letrasAlfabeto}
        salvarPalavra={salvarPalavra}
        iniciarJogo={iniciarJogo}
        classButton={classButton}
      />
    </Content>
  )
}
