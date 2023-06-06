import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddToList from '../Assets/Icons/add_list.png'
import requests from './Requests'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import getGenreById from './getGenreById'

const Main = ({ data, id }) => {
  
  const [movieData, setMovieData] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const API_KEY = "9ace0d7ebd683c963c2483c3032415b5"

  //fetching genres based on it's id
  let trailerVideoLink = '';
  useEffect(() => {
    const fetchMovie = async () => {
      if (id) { // check if the id prop is defined
        const ID = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
        try {
          const resp = await axios.get(ID);
          setMovieData(resp.data);
          // console.log(resp.data)
        } catch (err) {
          console.log(err);
        }


      }
    };

    const fetchTrailer = async () => {
      if (id) {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then(resp => {
          setTrailer(resp.data.results)
          // console.log(resp.data)
        }).catch(err => {
          console.log(err)
        })
      }

      
    }


    fetchMovie();
    fetchTrailer()

    
  }, [id]);

  const videoTrailer = trailer?.find(video => video.type === "Trailer");



  const truncateString = (str, num) => {
        if (str?.length > num)
            return str.slice(0, num) + '...';
        else
            return str;
  }

  
  return (
    <div className='z-10 absolute bottom-[4rem] md:bottom-[1rem] md:py-10 md:px-14 p-8  '>
      <div className='flex flex-col items-center md:items-start gap-4'>
        {
          movieData?.homepage?.length > 0 ? 
            <motion.a
              initial={{x:'-100px' , opacity:0}}
              animate={{ x: '0px', opacity: 1 }}
              transition={{ duration: .3, easeIn, delay: .6 }}
              target="_blank" href={movieData?.homepage} className='text-2xl sm:text-4xl font-black text-white text-center md:text-left'>{data?.original_title}</motion.a>
            :
            <motion.h1
        initial={{x:'-100px' , opacity:0}}
              animate={{ x: '0px', opacity: 1 }}
              transition={{ duration: .3, easeIn, delay: .6 }}
              className='text-2xl sm:text-4xl font-black text-white text-center md:text-left'>{data?.original_title}</motion.h1>

        }
        <motion.ul
          initial={{x:'-80px' , opacity:0}}
              animate={{ x: '0px', opacity: 1 }}
              transition={{ duration: .3, easeIn, delay: .75 }}
          className='flex gap-6 text-center'>
          <li className='text-secondaryColor '>{ movieData?.release_date }</li>
          <li className='text-secondaryColor list-disc'>2h 36m</li>
          <li className='text-ratinColor list-disc'>{ Math.round(movieData?.vote_average ) }/10 IMDB</li>
        </motion.ul>
        <motion.p
        initial={{x:'-70px' , opacity:0}}
              animate={{ x: '0px', opacity: 1 }}
          transition={{ duration: .3, easeIn, delay: .9 }}
          className='text-secondaryColor w-[80%] text-center md:w-[60%] md:text-left' title={movieData?.overview}>{truncateString(movieData?.overview, 80)}</motion.p>
        <div>
          <motion.div
            initial={{x:'-60px' , opacity:0}}
              animate={{ x: '0px', opacity: 1 }}
            transition={{ duration: .3, easeIn, delay: 1.05}}
            className='flex gap-2 justify-center items-center flex-wrap'>
            {
              movieData?.genres?.map((id, index) => (
                <motion.a href={`/genre/${getGenreById(id?.id)}/${id?.id}`} key={index}
                  className='group hover:bg-ratinColor  border-[1px] border-secondaryColor rounded-full px-6 py-[.4rem]  items-center justify-center text-center'>
                   <p className=' group-hover:text-black group-hover:font-medium transition-all duration-200 ease-in-out text-secondaryColor' key={index}>{ id.name }</p>
                </motion.a>
              ))
            }
            {/* <p>{ getNameById() }</p>
            <p>Adventure</p>
            <p>Drama</p> */}
          </motion.div>
          
        </div>
        <motion.div
        initial={{x:'-40px' , opacity:0}}
              animate={{ x: '0px', opacity: 1 }}
          transition={{ duration: .3, easeIn, delay: 1.2 }}
          className='flex gap-4 mt-4'>
          <motion.a href={`https://www.youtube.com/watch?v=${videoTrailer?.key}`} target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            
            className='px-10 py-4 bg-buttonBg rounded-md text-white font-bold'>
            Watch Trailer
          </motion.a>
          <motion.button
          whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className='flex items-center justify-center py-2 px-4  rounded-md bg-buttonBg/30'>
            <img className='min-w-[28px]' src={AddToList} alt="" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Main