import React from 'react'
import { useState, useEffect, useRef, } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import getGenreById from '../getGenreById'
const Genres = () => {
  const { genreId } = useParams();
    const [genreResults, setGenreResults] = useState([]);
  const API_KEY = "9ace0d7ebd683c963c2483c3032415b5"
    
  
    
  useEffect(() => {
  
    const fetchData = async () => {
      await axios.get( `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}` ).then(resp => {
        setGenreResults(resp.data.results)
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
      <h1 className='mt-14 font-semibold md:text-xl text-lg text-white'>Genre Results 🌝</h1>
      <div className='flex flex-col w-full h-full gap-3 p-3'>
        {
          genreResults.map(movie => (
            <Link to={`/movie/${movie?.id}`} title={movie?.overview} className='w-full  sm:h-[200px] rounded-md bg-[#222222] items-center justify-center sm:justify-start sm:p-2 sm:flex sm:flex-row flex flex-col p-4 gap-2 sm:gap-6 cursor-pointer hover:opacity-75
                hover:scale-[1.01] transition-all duration-200 ease-in-out '>
                    <img className='w-auto h-[400px] sm:h-full rounded-md object-cover text-center' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie?.title} />
                  <div className='flex flex-col gap-1 items-center sm:items-start'>
                <h1 className='text-white font-bold text-lg text-center sm:text-left'>{movie?.title} <span>{(movie?.release_date).slice(0, 4)}</span></h1>
                <div className='flex gap-3'>
                {
                  movie?.genre_ids?.map(id => (
                    <p className='text-sm font-medium text-ratinColor'>{ getGenreById(id) }</p>
                  ))
                }
                </div>
                
                <p className='text-[#DBDBDB] w-[100%] sm:w-[70%] text-center hidden sm:block sm:text-left'>{ truncateString(movie?.overview , 100) }</p>
                  </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Genres