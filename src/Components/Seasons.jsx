import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState , useEffect } from 'react';
import '@splidejs/react-splide/css';
import axios from 'axios';
import requests from './Requests';
import { Link } from 'react-router-dom'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence, useAnimation } from 'framer-motion'
import arrowIcon from '../Assets/Icons/arrowRight.png'
const Seasons = ({ data }) => {

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
      <div className='pt-8 px-8 md:pt-10 md:px-14 border-t-[.5px] border-[#c1c1c170] mb-8 '>
          <h1 className='font-bold md:text-xl text-lg text-[#fff]'>{ data?.number_of_seasons } Seasons</h1>
          <div  className='mt-4 w-full flex gap-3 flex-wrap justify-center md:justify-start  '>
              
                  {
                  data?.seasons?.map((res, index) => (
                              
                       <div className='w-[250px] md:w-[200px] h-auto rounded-md bg-slate-800 relative hover:opacity-80 transition-all duration-200 ease-in-out ' title={res?.season_number}>
                                  <img className='w-[250px] md:w-[200px]   rounded-md h-full' src={`https://image.tmdb.org/t/p/original/${res?.poster_path}`} alt="" />
                            <Link to={`/season/${data?.id}/${res?.season_number}`}>
                                  <div className='flex justify-between '>
                              <div className='absolute w-[250px] md:w-[200px] h-full bg-gradient-to-t from-black/80 to-transparent z-10 top-0 left-0 rounded-md p-4 flex items-end justify-between '>
                                          <div>
                                              <div className='flex gap-2 items-center md:flex md:flex-col md:justify-start md:gap-0'>
                                                  <h1 className='flex flex-col justify-end text-white font-bold' >Season { res?.season_number}</h1>
                                                  <p className=' text-sm text-ratinColor'>{res?.episode_count} Episodes</p>
                                              </div>
                                              
                                                  <p className='text-[#c1c1c1] text-sm '>{ res?.air_date }</p>
                                                  
                                  </div>
                              </div>
                              </div>
                            </Link>
                          
                        </div>
                          
                         
                      ))
                      
                  }
                  
            
             
             
             
          
          </div>
    </div>
  )
}

export default Seasons