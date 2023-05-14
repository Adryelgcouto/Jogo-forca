import { useState } from 'react'
import { remove } from 'remove-accents'
import { Chutar } from './chute.styl'

export function Chute({ palavraSorteada,setAtivo,setContador,setPalavrasUnder, iniciarJogo,setIniciarJogo  }) {
  const [palavraChute, setPalavraChute] = useState("")
  console.log(palavraChute, palavraSorteada)
  function chutar(){
    if (remove(palavraChute) === remove(palavraSorteada)) {
      setIniciarJogo(true)
      setAtivo('green')
      setPalavrasUnder(palavraSorteada)
    } else {
      setAtivo('red')
      setIniciarJogo(true)
      setPalavrasUnder(palavraSorteada)
      setContador(6)

    }
  }
  
  return (
    <Chutar>
      <p>Já sei a palavra!</p>
    <input
    disabled={iniciarJogo}
      onKeyDown={event => {
        if (event.key === 'Enter') {
          chutar()
        }
      }}
      type="text"
      value={palavraChute}
      onChange={event => setPalavraChute(event.target.value)}
    />
    <button  disabled={iniciarJogo} onClick={chutar}>Chutar</button>
    </Chutar>
    
    
    
  )
}
