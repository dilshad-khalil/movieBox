import React from 'react'
import Popular from './Popular';
import Trending from './Trending';
import Upcoming from './Upcoming';
import Footer from './Footer'

const Recomendations = () => {
    
    
  return (
    <div className='w-full h-auto bg-black relative top-full  '>
          <Popular />
          <Upcoming/>
          <Trending/>
          <Footer/>

    </div>
  )
}

export default Recomendations