import { useContext } from 'react'
import { AuthContext } from '../auth/authContex'
import { Navigate, useLocation } from 'react-router-dom'

const Privateroute = ({children}) => {

    const {user} = useContext(AuthContext)

    // Leer La url con useLocation para almacenarla en el localStorage
    const {pathname, search} = useLocation()
    localStorage.setItem('LastView', pathname + search)

    // Retornar si el usuario esta registrado el Children y si no esta registrado lo manda al login
    return user.logged ? children : <Navigate to='/login'/>
}

export default Privateroute