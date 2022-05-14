import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'


import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import LoginScreen from '../components/login/LoginScreen'
import DashboardRouter from './DashboardRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
        
        <Routes>
            {/* Ruta Publica */}
            {/* <Route path='/login' element={<LoginScreen/>}/> */}
            <Route path='/login' element={
                      <PublicRoute>
                        <LoginScreen/>
                      </PublicRoute>
            }/>
            
            {/* Rutas Privadas */}
            <Route path='/*' element={
                      <PrivateRoute>
                        <DashboardRouter/>
                      </PrivateRoute>
              }/>
            {/* <Route path='/*' element={<DashboardRouter/>}/> */}
        
        </Routes>

        
    </BrowserRouter>
  )
}

export default AppRouter