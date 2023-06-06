import React from 'react'
import { useState, useEffect, useRef, } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import getGenreById from '../getGenreById'
import movieIcon from '../../Assets/Icons/movie.png'
const SearchPage = () => {
  const { query } = useParams();
  
  const [serachResults, setSearchResults] = useState([]);
  useEffect(() => {
    const Link = `https://api.themoviedb.org/3/search/movie?api_key=9ace0d7ebd683c963c2483c3032415b5&language=en-US&query=${query}&page=1&include_adult=false`
    const fetchData = async () => {
      await axios.get(Link).then(resp => {
        setSearchResults(resp.data.results)
        // console.log(resp.data)
      }).catch(err => {
        console.log(err)
      })
    }

    fetchData();
  }, [])
  
  const truncateString = (str, num) => {
        if (str?.length > num)
            return str.slice(0, num) + '...';
        else
            return str;
  }
  
  return (
    <div className=' md:py-10 md:px-14 p-8 '>
      <motion.h1
      initial={{ y: '-40px' , opacity:0 }}
              animate={{ y: '0px' , opacity:1 }}
              transition={{duration:.4 , easeInOut , delay:.6}}
        className='mt-14 font-semibold md:text-xl text-lg text-white'>Search Results 🔎</motion.h1>
      <motion.div
       initial={{ y: '-40px' , opacity:0 }}
              animate={{ y: '0px' , opacity:1 }}
        transition={{ duration: .4, easeInOut, delay: .9 }}
        className='flex flex-col w-full h-full gap-3 p-3'>
        {
          serachResults.map(movie => (
            <Link to={`/movie/${movie?.id}`} title={movie?.overview} className='w-full  sm:h-[200px] rounded-md bg-[#222222] items-center justify-center sm:justify-start sm:p-2 sm:flex sm:flex-row flex flex-col p-4 gap-2 sm:gap-6 cursor-pointer hover:opacity-75
                hover:scale-[1.01] transition-all duration-200 ease-in-out '>
                <img className={movie?.poster_path ?`w-auto h-[400px] sm:h-full rounded-md object-cover text-center` : `h-6 w-auto px-12`}
                src={movie?.poster_path ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}` : movieIcon } alt={movie?.title} />
              
                  <div className='flex flex-col gap-1 items-center sm:items-start'>
                <h1 className='text-white font-bold text-[1rem] text-center sm:text-left'>{movie?.title} <span>{(movie?.release_date).slice(0, 4)}</span></h1>
                <div className='flex gap-3 flex-wrap justify-center md:justify-start md:flex-nowrap'>
                {
                  movie?.genre_ids?.map(id => (
                    <p className='text-[.8rem] font-medium text-ratinColor'>{ getGenreById(id) }</p>
                  ))
                }
                </div>
                
                <p className='text-[#DBDBDB] w-[100%] sm:w-[70%] text-center hidden sm:block sm:text-left'>{ truncateString(movie?.overview , 100) }</p>
                  </div>
            </Link>
          ))
        }
      </motion.div>
    </div>
  )
}

export default SearchPage