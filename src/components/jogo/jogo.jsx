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
        <img src={forcaArray[contador]} alt="" />
        <div>
          <Button onClick={() => comecaJogo(letrasAlfabeto)}>Iniciar Jogo</Button>
          <div>
            <PalavraForca color={Ativo}>{palavrasUnder}</PalavraForca>
          </div>
        </div>
      </div>
    </ContentJogo>
  )
}
