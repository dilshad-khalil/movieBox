import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState , useEffect } from 'react';
import '@splidejs/react-splide/css';
import axios from 'axios';
import requests from './Requests';
import { Link , useParams } from 'react-router-dom'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence, useAnimation } from 'framer-motion'
import arrowIcon from '../Assets/Icons/arrowRight.png'
const TvShowCrew = ({data}) => {


  return (
    <div className='pt-8 px-8 md:pt-10 md:px-14 mb-8'>
          <h1 className='font-bold md:text-xl text-lg text-[#fff]'>Guest Stars </h1>
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
                      data?.guest_stars?.map((res , index ) => (
                           <SplideSlide key={index}>
                              <motion.div className='min-w-[200px] h-full rounded-md bg-slate-800 relative hover:opacity-80 transition-all duration-200 ease-in-out ' title={res?.original_name}>
                                      <img className='w-full  rounded-md h-full ' src={`https://image.tmdb.org/t/p/original/${res?.profile_path}`} alt="" />
                                      <Link to={`/actor/${res?.id}`}>
                                      <div className='flex justify-between '>
                                         <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent z-10 top-0 left-0 rounded-md p-4 flex items-end justify-between '>
                                             <div>
                                               <h1 className='flex flex-col justify-end text-white font-bold' >{res?.original_name  }</h1>
                                               <p className='flex flex-col justify-end text-[#c1c1c1] font-medium text-sm' >{res?.character  }</p>
                                             </div>
                                         </div>
                                      </div>
                                      </Link>
                              </motion.div>
                          </SplideSlide>
                          
                         
                      ))
                      
                  }
                  
             
             
             
             
             
          </Splide>
          </div>
    </div>
  )
}

export default TvShowCrew