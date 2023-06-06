import React, { useEffect, useState } from 'react'
import Emoji from '../Emoji'
import Emojies from '../EmojiPicker'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import requests from '../Requests'
import {Link} from 'react-router-dom'
const TrendingPage = () => {
    const [trending, setTrending] = useState([]);
    const fetchPopular = async () => {
        await axios.get(requests.requestTrending).then(resp => {
            setTrending(resp.data.results);
            // console.log(resp.data)
        }).catch(err => {
            console.log(err);
        })
    }
    
    useEffect(() => {
        fetchPopular(); 
    }, [])
    
    const truncateString = (str, num) => {
        if (str?.length > num)
            return str.slice(0, num) + '...';
        else
            return str;
    }

  return (
      <div className='md:py-10 md:px-14 p-8'>
          <div className='mt-14'>
              <motion.h1
             
                  className='text-white md:text-lg text-sm font-bold flex items-center gap-1'>Trending Movies  <Emoji Emoji={Emojies.okHand} width={'6'} height={'6'} />
              </motion.h1>

              <motion.div
              
                  className='w-full h-auto bg-black grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-4'>
                  {
                      trending.map(res => (
                          <div
                                  className=' w-full h-full rounded-md bg-slate-800 relative hover:opacity-80 transition-all duration-200 ease-in-out ' title={res?.title}>
                                  <img className='w-full  rounded-md h-full' src={`https://image.tmdb.org/t/p/original/${res?.poster_path}`} alt="" />
                                  <Link to={`/movie/${res?.id}`}>
                                  <div className='flex justify-between '>
                              <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent z-10 top-0 left-0 rounded-md p-4 flex items-end justify-between '>
                                  <div>
                                              <h1 className='flex flex-col justify-end text-sm lg:text-lg text-white font-bold w-full' >{ truncateString(res?.title , 30) }</h1>
                                  <p className='text-[#c1c1c1] text-sm lg:text-[1rem]'>{res?.release_date}</p>
                                  </div>
                                  
                              <p className=' text-ratinColor font-bold text-[.7rem] lg:text-[1rem]'>{Math.round(res?.vote_average) }/10</p>

                              </div>
                          </div>
                                  </Link>
                          
               </div>
                      ))
                  }
              </motion.div>
          </div>
           
    </div>
  )
}

export default TrendingPage