import comeco from '../assets/forca0.png'
const array = ['palavra', 'outraPalavra', 'teste']
export default function Jogo() {
  return (
    <div className="contentPrincipal">
      <div>
        <img src={comeco} alt="" />
        <div>
          <button>Iniciar Jogo</button>
          <div>
            {array.map((palavra) =>{
              return (
              <span> _</span>
              ) 
            })}
          </div>
         
        </div>
      </div>
    </div>
  )
}
