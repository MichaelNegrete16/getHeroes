import { Link } from "react-router-dom"
import '../../css/herosCard.css'

const HeroCard = ({id,superhero,alter_ego,first_appearance,characters}) => {
  return (
        <div className="animate__animated animate__fadeIn card-group">
                <div className="card">

                    <div className="imgDesing">
                        <img src={`/assets/img/${id}.jpg`} className='card-img-top' alt={superhero} />
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {(alter_ego !== characters) && <p className='text-muted'>{characters}</p>}
                        <Link to={`/heroe/${id}`}>Ver Mas..</Link>
                    </div>

                    <div className="card-footer">
                        <p className='card-text'>
                             <small className='text-muted'>{first_appearance}</small>
                         </p>
                    </div>
                </div>
        </div>
  )
}

export default HeroCard