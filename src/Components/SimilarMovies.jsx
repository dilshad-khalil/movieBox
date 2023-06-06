import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState , useEffect } from 'react';
import '@splidejs/react-splide/css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence, useAnimation } from 'framer-motion'
import Emoji from './Emoji'
import Emojies from './EmojiPicker'

const SimilarMovies = () => {
    const { movieId } = useParams();
     const API_KEY = "9ace0d7ebd683c963c2483c3032415b5"
    const [similar, setSimilar] = useState([]);

    const fetchData = async () => {
    await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}`).then(resp => {
      setSimilar(resp.data.results)
      // console.log(resp.data)
    }).catch(err => {
      console.log(err)
    })
  }
 
  useEffect(() => {
    fetchData();
  }, [])
    
 
    const truncateString = (str, num) => {
        if (str?.length > num)
            return str.slice(0, num) + '...';
        else
            return str;
    }
    
  return (
      <div className='pt-8 px-8 md:pt-10 md:px-14 border-t-[.5px] border-[#ffffff4f] mt-8 mb-8'>
          <h1 className='font-bold md:text-xl text-lg text-[#fff] flex items-center gap-1'>Similar Movies <Emoji Emoji={Emojies.drollingFace} width={'6'} height={'6'} /></h1>
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
                      similar?.slice(0,15)?.map((res , index ) => (
                           <SplideSlide key={index}>
                              
                              <motion.div
                                  
                                  className='min-w-[200px] h-full rounded-md bg-slate-800 relative hover:opacity-80 transition-all duration-200 ease-in-out ' title={res?.title}>
                                  <img className='w-full  rounded-md h-full' src={`https://image.tmdb.org/t/p/original/${res?.poster_path}`} alt="" />
                                  <Link onClick={()=>window.location.href = `/movie/${res?.id}`}  >
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
             
             
             
             
             
          </Splide>
          </div>
    </div>
  )
}

export default SimilarMovies