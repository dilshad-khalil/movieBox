import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState , useEffect } from 'react';
import '@splidejs/react-splide/css';
import axios from 'axios';
import requests from './Requests';
import { Link } from 'react-router-dom'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence, useAnimation } from 'framer-motion'
import arrowIcon from '../Assets/Icons/arrowRight.png'
const Upcoming = () => {

    const [ucoming, setUpcoming] = useState([]);
    const fetchTrending = async () => {
        await axios.get(requests.upcomingMovies).then(resp => {
            setUpcoming(resp.data.results);
            // console.log(resp.data)
        }).catch(err => {
            console.log(err);
        })
    }
    
    useEffect(() => {
        fetchTrending(); 
    }, [])
    
    const truncateString = (str, num) => {
        if (str?.length > num)
            return str.slice(0, num) + '...';
        else
            return str;
    }
    let timing = 0.1;

  return (
      <div className='pt-8 px-8 md:pt-10 md:px-14 border-t-[.5px] border-[#c1c1c170] mb-8'>
          <h1 className='font-bold md:text-xl text-lg text-[#fff]'>Upcoming Movies ↗️</h1>
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
                      ucoming?.slice(0,8)?.map((res , index ) => (
                           <SplideSlide key={index}>
                              
                              <motion.div
                                  
                                  className='min-w-[200px] h-full rounded-md bg-slate-800 relative hover:opacity-80 transition-all duration-200 ease-in-out ' title={res?.title}>
                                  <img className='w-full  rounded-md h-full' src={`https://image.tmdb.org/t/p/original/${res?.poster_path}`} alt="" />
                                  <Link to={`movie/${res?.id}`}>
                                  <div className='flex justify-between '>
                              <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent z-10 top-0 left-0 rounded-md p-4 flex items-end justify-between '>
                                  <div>
                                              <h1 className='flex flex-col justify-end text-white font-bold' >{ truncateString(res?.title , 30) }</h1>
                                  <p className='text-[#c1c1c1] '>2022-12-12</p>
                                  </div>
                                  
                              <p className=' text-ratinColor font-bold text-[.9rem]'>8/10</p>

                              </div>
                          </div>
                                  </Link>
                          
               </motion.div>
                          </SplideSlide>
                          
                         
                      ))
                      
                  }
                  
             
             <SplideSlide>
            <Link to={`/upcoming`} className='min-w-[200px] group h-full flex items-center justify-center rounded-md bg-[#222222] relative hover:opacity-80 transition-all duration-200 ease-in-out'>
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

export default Upcoming