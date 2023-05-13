import comeco from '../assets/forca0.png'
export default function Jogo({comecaJogo, palvras}) {
  return (
    <section className="contentJogo">
      <div>
        <img src={comeco} alt="" />
        <div>
          <button onClick={comecaJogo} >Iniciar Jogo</button>
          <div>
            <span> _</span>
            <span> _</span>
            <span> _</span>
            <span> _</span>
          </div>
        </div>
      </div>
    </section>
  )
}
