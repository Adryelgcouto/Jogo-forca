import Jogo from './components/jogo'
import Letras from './components/letras'
import palavras from './palavras'
import alfabeto from './components/alfabeto'
import { useState } from 'react'

export default function App() {
  let [letrasAlfabeto, setLetrasAlfabeto] = useState([])
  let [iniciarJogo, setIniciarJogo] = useState(true)
  let [classButton, setClassButton] = useState('desativado')
  let [clickButton, setClickButton] = useState('')
  function salvarPalavra(letras) {

    letrasAlfabeto.push(letras)
    console.log(letrasAlfabeto)
  }
  function comecaJogo() {
    classButton = 'habilitado'
    iniciarJogo = false
    setIniciarJogo(iniciarJogo)
    setClassButton(classButton)
  }

  return (
    <div className="content">
      <Jogo palavras={palavras} comecaJogo={comecaJogo}  />
      <Letras alfabeto={alfabeto} salvarPalavra={salvarPalavra} iniciarJogo={iniciarJogo} classButton={classButton} />
    </div>
  )
}
