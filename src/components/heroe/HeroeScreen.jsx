import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

// llamada de las imagenes utilizando webpack - ya esto viene con react
const heroCardImg = require.context('../../assets/img', true)

const HeroeScreen = () => {
    // Extraer el id de la url
    const {id} = useParams()
    const hero = useMemo(()=> getHeroById(id), [id] )
    const navigate = useNavigate()

    if(!hero){
      return <Navigate to={'/'}/>
    }


    const handleReturn = () => {
      // El -1 indica que regresa a la pagina anterior
        navigate(-1)
    }

    return (
      <div className='row mt-5'>

          <div className='col-4'>
              {/* Forma normal de llamar las imagenes desde public/assets */}
              {/* <img src={`/assets/img/${hero.id}.jpg`} alt={hero.superhero} className='animate__animated animate__bounceInLeft  img-thumbnail'/> */}

              {/* forma de llamar las imagens con webpack */}
              <img src={heroCardImg(`./${hero.id}.jpg`)} alt={hero.superhero} className='animate__animated animate__bounceInLeft img-thumbnail' />
          </div>

          <div className='col-8'>

              <h3>{hero.superhero}</h3>
              <ul className='list-group list-group-flush'>
                  <li className='list-group-item'> <b>Alter Ego: </b> {hero.alter_ego} </li>
                  <li className='list-group-item'> <b>Publisher: </b> {hero.publisher} </li>
                  <li className='list-group-item'> <b>first Appereance: </b> {hero.first_appearance} </li>
              </ul>
              <h5 className='mt-3'>characters</h5>
              <p>{hero.characters}</p>
              <button className='btn btn-outline-info' onClick={handleReturn}>Regresar</button>
          </div>

      </div>
    )
}

export default HeroeScreen