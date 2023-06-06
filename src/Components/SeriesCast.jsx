import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState , useEffect } from 'react';
import '@splidejs/react-splide/css';
import axios from 'axios';
import requests from './Requests';
import { Link , useParams } from 'react-router-dom'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence, useAnimation } from 'framer-motion'
import arrowIcon from '../Assets/Icons/arrowRight.png'
const SeriesCast = () => {
  const { movieId } = useParams();
  const API_KEY = "9ace0d7ebd683c963c2483c3032415b5"
  const [cast , setCast] = useState([])
    
    const fetchCast = async () => {
    await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`).then(resp => {
      setCast(resp.data.cast)
      // console.log(resp.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchCast();
  }, [])


  return (
    <div className='pt-8 px-8 md:pt-10 md:px-14'>
          <h1 className='font-bold md:text-xl text-lg text-[#fff]'>Series Cast </h1>
          <div  className='mt-4 '>
              <Splide  options={{
              height: '280px',
              perMove: 1,
              gap:'1rem',
              fixedWidth: '200px',
             
              pagination: false,
                  padding: '1rem',
                  focus:'center'
                  
              }} >
                  {
                      cast?.slice(0,8)?.map((res , index ) => (
                           <SplideSlide key={index}>
                              
                              <motion.div className='min-w-[200px] h-full rounded-md bg-slate-800 relative hover:opacity-80 transition-all duration-200 ease-in-out ' title={res?.original_name}>
                                      <img className='w-full  rounded-md h-full ' src={`https://image.tmdb.org/t/p/original/${res?.profile_path}`} alt="" />
                                      <Link to={`/actor/${res?.id}`}>
                                      <div className='flex justify-between '>
                                         <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent z-10 top-0 left-0 rounded-md p-4 flex items-end justify-between '>
                                             <div>
                                               <h1 className='flex flex-col justify-end text-white font-bold' >{res?.original_name  }</h1>
                                             </div>
                                         </div>
                                      </div>
                                      </Link>
                              </motion.div>
                          </SplideSlide>
                          
                         
                      ))
                      
                  }
                  
             
             <SplideSlide>
            <Link to={`/crew/${movieId}`} className='min-w-[200px] group h-full flex items-center justify-center rounded-md bg-[#222222] relative hover:opacity-80 transition-all duration-200 ease-in-out'>
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

export default SeriesCast