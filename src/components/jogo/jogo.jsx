import comeco from '../../../src/assets/forca0.png'
import { Button, ContentJogo } from './jogo.style'
export default function Jogo({comecaJogo, buttonIncial, palavraArray}) {
  return (
    <ContentJogo >
      <div>
        <img src={comeco} alt="" />
        <div>
          <Button disabled={buttonIncial} onClick={comecaJogo} >Iniciar Jogo</Button>
          <div>
           <p>{palavraArray.map((array) => <span>  _</span>)}</p>
          </div>
        </div>
      </div>
    </ContentJogo>
  )
}
