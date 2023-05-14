

import { Button, ContentJogo, PalavraForca } from './jogo.style'
export default function Jogo({comecaJogo, palvras, buttonIncial, palavraArray,letrasAlfabeto, forcaArray, contador, Ativo}) {
  console.log(palavraArray);
  return (
    <ContentJogo >
      <div>
        <img src={forcaArray[contador]} alt="" />
        <div>
          <Button onClick={comecaJogo} >Iniciar Jogo</Button>
          <div>
           <PalavraForca color={Ativo}>{palavraArray.map((array) => <span  >{letrasAlfabeto.includes(array) ? array.toUpperCase() : ' _' }</span>)}</PalavraForca>
          </div>
        </div>
      </div>
    </ContentJogo>
  )
}
