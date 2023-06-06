import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import Posters from '../Posters'
import SimilarMovies from '../SimilarMovies'
import MovieTrailer from '../MovieTrailer'
import SeriesCast from '../SeriesCast'
const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  
  const API_KEY = "9ace0d7ebd683c963c2483c3032415b5"
  
  const fetchData = async () => {
    await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(resp => {
      setMovie(resp.data)
      // console.log(resp.data)
    }).catch(err => {
      console.log(err)
    })
  }
  
  

 
 
  useEffect(() => {
window.scrollTo(0, 0);
    fetchData();
  }, [])
  
  const truncateString = (str, num) => {
        if (str?.length > num)
            return str.slice(0, num) + '...';
        else
            return str;
  }
  return (
    <div className='' >
      <div className='h-screen w-full '>

       <div className='absolute  w-full h-full top-0 '>
        <img className=' bg-center object-cover md:block w-full h-full ' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
          <div className='bg-black/70  w-full h-full absolute top-0  items-center md:py-10 md:px-14 p-8 md:flex md:flex-row flex justify-center
          md:justify-start flex-col '>
            <img className='md:w-[270px] w-[170px] rounded-md' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="" />
            <div className='ml-4  flex flex-col items-center md:items-start gap-2 mt-3 md:mt-0'>
              <h1 className='text-white font-bold text-xl md:text-2xl l text-center md:text-left md:w-[70%]'>{movie?.title}</h1>
              <p className='text-[#c1c1c1] text-sm md:text-[1rem]'>{movie?.release_date} | 2h 36m | <span className='text-ratinColor'>{Math.round(movie?.vote_average)}/10 IMDB</span> </p>


              <div className='flex gap-2 items-center justify-center md:justify-start flex-wrap mt-2'>
                {
                  movie?.genres?.map((genre , index) => (
                    <Link to={`/genre/${genre.name}/${genre.id}`} key={index}
                  className='group hover:bg-ratinColor  border-[1px] border-secondaryColor rounded-full px-6 py-[.4rem]  items-center justify-center text-center'>
                   <p className=' group-hover:text-black group-hover:font-medium transition-all duration-200 ease-in-out text-secondaryColor text-sm' key={index}>{ genre.name }</p>
                </Link>
                  ))
                }
              </div>

              
              <div className='flex flex-col items-center md:items-start gap-2'>
                <h1 className='text-lg font-bold text-white'>Overview</h1>
                <p className='text-[#c1c1c1] text-center md:text-left w-[100%] text-sm md:text-[1rem]  md:w-[70%]'>{ truncateString(movie?.overview , 1000) }</p>
              </div>


            </div>
        </div>
        </div>
      </div>

      <div>
        
      </div>
      <SeriesCast/>
      <MovieTrailer/>
      <Posters />
      <SimilarMovies  />
    </div>
  )
}

export default MovieInfo