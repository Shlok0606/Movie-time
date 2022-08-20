import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Trending from './Trending'
import Search from './Search'
import Movies from './Movies'
import Error from './Error'
import TVSeries from './TVSeries'
import Individual from './Individual';

function FooterRouter() {
  return (
  <div className='body'>

      <Routes>
        <Route path="/" element={<Trending/>}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvSeries" element={<TVSeries />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:id" element={<Individual />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    

  </div>
  )
}

export default  FooterRouter