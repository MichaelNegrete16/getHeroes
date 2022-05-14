import React, { useContext } from 'react'
import { AuthContext } from '../auth/authContex'
import { Navigate } from 'react-router-dom'

// El children se recibe por defecto ya que dentro de publicRoute en el route de las rutas principales
// cuenta con hijos dentro de ellos por ende recibe el hijo de lo que se va renderizar
const PublicRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    return user.logged ? <Navigate to='/'/> : children
}

export default PublicRoute