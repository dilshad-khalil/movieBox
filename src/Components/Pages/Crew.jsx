import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import Emoji from '../Emoji'
import Emojies from '../EmojiPicker'
import Profile from '../../Assets/Icons/profile.png'
const Crew = () => {
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
      <div className='md:py-10 md:px-14 p-8'>
          <div className='mt-14'>
              <motion.h1
              initial={{ y: '-40px' , opacity:0 }}
              animate={{ y: '0px' , opacity:1 }}
              transition={{duration:.4 , easeInOut , delay:.6}}
                  className='text-white md:text-lg text-sm font-bold flex items-center gap-1'>Movie Crew  <Emoji Emoji={Emojies.okHand} width={'6'} height={'6'} />
              </motion.h1>

              <motion.div
              initial={{ y: '-60px' , opacity:0 }}
              animate={{ y: '0px' , opacity:1 }}
                  transition={{ duration: .4, easeInOut, delay: .9 }}
                  className='w-full h-auto bg-black grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-4'>
                  {
                      cast.map(res => (
                        res?.profile_path ? <div
                                  className=' w-full h-full rounded-md bg-slate-800 relative hover:opacity-80 transition-all duration-200 ease-in-out ' title={res?.title}>
                                  <img className='w-full  rounded-md h-[300px] object-cover' src={`https://image.tmdb.org/t/p/original/${res?.profile_path}`} alt="" />
                                  <div className='flex justify-between '>
                              <div className='absolute w-full h-full bg-gradient-to-t from-black/70 to-transparent z-10 top-0 left-0 rounded-md p-4 flex items-end justify-between '>
                                  <div>
                                  <h1 className='flex flex-col justify-end text-sm md:text-lg text-white font-bold w-full' >{res?.original_name}</h1>
                                  </div>
                                  

                              </div>
                          </div>
                          
                        </div> :
                          <div
                            className=' w-full h-[300px] rounded-md bg-[#222222] relative hover:opacity-80 transition-all duration-200 ease-in-out flex justify-center items-center ' title={res?.title}>
                            <div className='flex flex-col items-center gap-2'>
                                  <img className='w-6 h-6' src={Profile} alt="" />
                                   <p className='text-[#c1c1c1] text-sm'>Picture Not Available</p>
                            </div>
                              <div className='flex justify-between '>
                              <div className='absolute w-full h-full z-10 top-0 left-0 rounded-md p-4 flex items-end justify-between '>
                                  <div>
                                  <h1 className='flex flex-col justify-end text-sm md:text-lg text-white font-bold w-full' >{res?.original_name}</h1>
                                  </div>
                                  
                              </div>
                          </div>
                          
               </div>
                      ))
                  }
              </motion.div>
          </div>
           
    </div>)
}

export default Crew