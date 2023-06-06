import React, { useEffect, useState } from 'react'
import Emoji from '../Emoji'
import Emojies from '../EmojiPicker'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import requests from '../Requests'
import {Link , useParams} from 'react-router-dom'

const PostersPage = () => {
    const { posterId } = useParams();
    const API_KEY = "9ace0d7ebd683c963c2483c3032415b5"
    const [posters, setPosters] = useState([]);

    const fetchData = async () => {
    await axios.get(`https://api.themoviedb.org/3/movie/${posterId}/images?api_key=${API_KEY}`).then(resp => {
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
    <div className='md:py-10 md:px-14 p-8'>
          <div className='mt-14'>
              <motion.h1
              initial={{ y: '-40px' , opacity:0 }}
              animate={{ y: '0px' , opacity:1 }}
              transition={{duration:.4 , easeInOut , delay:.6}}
                  className='text-white md:text-lg text-sm font-bold flex items-center gap-1'>Movie Posters<Emoji Emoji={Emojies.okHand} width={'6'} height={'6'} />
              </motion.h1>

              <motion.div
              initial={{ y: '-60px' , opacity:0 }}
              animate={{ y: '0px' , opacity:1 }}
                  transition={{ duration: .4, easeInOut, delay: .9 }}
                  className='w-full h-auto bg-black grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-4 '>
                  {
                      posters?.slice(0,100)?.map(res => (
                          <div>
                                  <img className='w-full  rounded-md h-full' src={`https://image.tmdb.org/t/p/original/${res?.file_path}`} alt="" />
                          </div>
                      ))
                 }
              
              </motion.div>
          </div>
           
    </div>
  )
}

export default PostersPage