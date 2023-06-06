import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from 'axios'
import arrowIcon from '../Assets/Icons/arrowRight.png'
const Posters = () => {
    const { movieId } = useParams();
    const API_KEY = "9ace0d7ebd683c963c2483c3032415b5"
    const [posters, setPosters] = useState([]);

    const fetchData = async () => {
    await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}`).then(resp => {
      setPosters(resp.data.posters)
      // console.log(resp.data)
    }).catch(err => {
      console.log(err)
    })
  }
 
  useEffect(() => {
    fetchData();
  }, [])
  return (
      <div className='pt-8 px-8 md:pt-10 md:px-14 border-t-[.5px] border-[#ffffff4f]'>
             <h1 className='font-bold md:text-xl text-lg text-white'>Posters↗️</h1>
          <div  className='mt-4'>
              <Splide  options={{
              height: '280px',
              perMove: 1,
              gap:'1rem',
          fixedWidth: '200px',
                  focus:'center',
            
              pagination: false,
          padding: '1rem',
                  
              }} >
              {
                posters.slice(0,10).map((res , index ) => (
                   <SplideSlide  key={index}>
                     <motion.div
                        className='min-w-[200px] h-full rounded-md bg-slate-800 relative hover:opacity-80 transition-all duration-200 ease-in-out ' title={res?.title}>
                        <img className='w-full  rounded-md h-full' src={`https://image.tmdb.org/t/p/original/${res?.file_path}`} alt="" />
                     </motion.div>
                   </SplideSlide>
                         
                ))
              }
             <SplideSlide>
            <Link to={`/posters/${movieId}`} className='min-w-[200px] group h-full flex items-center justify-center rounded-md bg-[#222222] relative hover:opacity-80 transition-all duration-200 ease-in-out'>
              <div className='flex gap-1 group-hover:gap-3 transition-all duration-200 ease-in-out'>
                        <h1 className='font-bold text-white'>View All</h1>
                        <img src={arrowIcon} alt="" />
              </div>
                     </Link>
            </SplideSlide>
             
             
          </Splide>
          </div>
    </div>
  )
}

export default Posters