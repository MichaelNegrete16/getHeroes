import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContex'
import { type } from '../../types/types'

const LoginScreen = () => {

    const navigate = useNavigate()
    // El distpatch esta ya implementado en HeroresApp
    const {dispatch} = useContext(AuthContext)

    const handleLogin = () => {

      // Se crea el action que se va a mandar al reducer
      const action = {
        type: type.login,
        payload: {
          name: 'Michael'
        }
      }
      dispatch(action)
      
      // Se obtiene en una constante el valor del localStorage para mejorar la experiencia de usuario
      // Y redirigirlo a la ultima pagina vista por si el inicio de sesion expira o se hace Logout
      const lastView = localStorage.getItem('LastView') || '/'
      
      // Se pone el replace para borrar el historial de busqueda y no poder dar Back en la pagina y volver
      navigate(lastView,{
        replace:true
      })
    }

    return (
      <div className='container mt-5'>
          <h1>Login Screen</h1>
          <hr />

          <button className='btn btn-primary' onClick={handleLogin} >Login</button>
      </div>
    )
}

export default LoginScreen