import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../components/ui/Navbar'
import MarvelScreen from '../components/marvel/MarvelScreen'
import DcScreen from '../components/dc/DcScreen'
import SearchScreen from '../components/search/SearchScreen'
import HeroeScreen from '../components/heroe/HeroeScreen'

const DashboardRouter = () => {
  return (
    <>
        <Navbar/>
        
        <div className='container'>
          <Routes>
              <Route path='marvel' element={<MarvelScreen/>}/>
              <Route path='dc' element={<DcScreen/>}/>    
              <Route path='heroe/:id' element={<HeroeScreen/>}/>

              <Route path='search' element={<SearchScreen/>}/>

              <Route path='/' element={<MarvelScreen/>}/>
          </Routes>
        </div>
        
    </>
  )
}

export default DashboardRouter