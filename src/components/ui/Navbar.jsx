import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContex'
import { type } from '../../types/types'

const Navbar = () => {

    // Uso del context de otra forma a la que suelo usar abitualmente
    const context = useContext(AuthContext)
    const {user, dispatch} = context

    const navigate =useNavigate()

    const handleLogout = () => {
        const action = {
            type: type.logout
        }
        dispatch(action)
        navigate('/login',{
            replace:true
        })
    }




    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/search"
                        >
                            Buscar
                        </NavLink>

                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className='nav-item nav-link text-info'>{user.name}</span>
                        <button className="nav-item nav-link btn" onClick={handleLogout}> Logout </button>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar