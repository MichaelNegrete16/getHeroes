import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useMemo } from 'react'

import { useForm } from '../../helper/useForm'
import { getHeroesByname } from '../../selectors/getHeroesByName'
import HeroCard from '../heroe/HeroCard'

const SearchScreen = () => {

    const navigate = useNavigate()
    // UseLocation para tener registrado los parametros de la url y obtener los datos
    const location = useLocation()
    const {q = ''} = queryString.parse(location.search)

    const [formValue, handleInputchange] = useForm({
      searchText: q
    })
    const {searchText} = formValue

    const heroesFilted = useMemo(()=> getHeroesByname(q), [q])


    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(searchText)
      navigate(`?q=${searchText}`)
    }

    return (
      <>
          <h1>Buquedas</h1>
          <hr />
          <div className='row'>

              <div className='col-5'>

                  <h4>Nombre de Super Heroe</h4>
                  <hr />

                  <form onSubmit={handleSubmit}>
                    <input  value={searchText} onChange={handleInputchange}
                            type="text" placeholder='Buscar heroe..' className='form-control' name='searchText' autoComplete='off'/>
                    <button type='submit' className='btn btn-primary mt-3 '>Buscar</button>
                  </form>
                  
              </div>

              <div className='col-7'>
                  <h4>Resultado..</h4>
                  <hr />

                  {q==='' ? <div className='alert alert-info'>Empieza a buscar..</div> 
                          : heroesFilted.length === 0 && <div className='alert alert-danger'>No hay resultados a esta busqueda: {q}</div>}

                  {heroesFilted.map(heroe => (
                      <HeroCard key={heroe.id} {...heroe}/>
                  ))}
              </div>

          </div>
      </>
    )
}

export default SearchScreen