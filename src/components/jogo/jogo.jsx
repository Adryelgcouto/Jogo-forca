import { Button, ContentJogo, PalavraForca } from './jogo.style'
export default function Jogo({
  comecaJogo,
  palvras,
  buttonIncial,
  palavraArray,
  letrasAlfabeto,
  forcaArray,
  contador,
  Ativo,
  palavrasUnder
}) {
  
  return (
    <ContentJogo>
      <div>
        <img data-test="game-image" src={forcaArray[contador]} alt="" />
        <div>
          <Button data-test="choose-word" onClick={() => comecaJogo(letrasAlfabeto)}>Iniciar Jogo</Button>
          <div>
            <PalavraForca data-test="word" color={Ativo}>{palavrasUnder}</PalavraForca>
          </div>
        </div>
      </div>
    </ContentJogo>
  )
}
