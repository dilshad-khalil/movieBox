import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import Posters from '../Posters'
import SimilarMovies from '../SimilarMovies'
import MovieTrailer from '../MovieTrailer'
import SeriesCast from '../SeriesCast'
import TvShowCrew from '../TvShowCrew'
const EpisodeInfo = () => {
const [episodes, setEpisodes] = useState([]);
    const { movieId } = useParams();
  const { seasonNum } = useParams();
  const { episodeNum } = useParams();
  
    const API_KEY = '9ace0d7ebd683c963c2483c3032415b5';
        const fetchPopular = async () => {
            await axios.get(`https://api.themoviedb.org/3/tv/${movieId}/season/${seasonNum}?api_key=${API_KEY}&language=en-US`).then(resp => {
                setEpisodes(resp.data.episodes);
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
    <div className='' >
      <div className='h-screen w-full '>

       <div className='absolute  w-full h-full top-0 '>
        <img className=' bg-center object-cover md:block w-full h-full ' src={`https://image.tmdb.org/t/p/original/${episodes[episodeNum]?.still_path}`} alt="" />
          <div className='bg-black/70  w-full h-full absolute top-0 items-center md:py-10 md:px-14 p-8 md:flex md:flex-col flex justify-center
          flex-col '>
            <img className='lg:h-[270px] h-[170px] rounded-md' src={`https://image.tmdb.org/t/p/original/${episodes[episodeNum]?.still_path}`} alt="" />
            <div className='ml-4  flex flex-col items-center justify-center  gap-2 mt-3 md:mt-0'>
              <h1 className='text-white font-bold text-xl md:text-xl mt-2 text-center md:w-[70%]'>{episodes[episodeNum]?.name}</h1>
              <p className='text-[#c1c1c1] text-sm md:text-[1rem]'>{episodes[episodeNum]?.air_date} | {episodes[episodeNum]?.runtime} m | <span className='text-ratinColor'>{Math.round(episodes[episodeNum]?.vote_average)}/10 IMDB</span> </p>


              <div className='flex gap-2 items-center justify-center md:justify-start flex-wrap mt-2'>
                
              </div>

              
              <div className='flex flex-col items-center gap-2'>
                <h1 className='text-lg font-bold text-white'>Overview</h1>
                <p className='text-[#c1c1c1] text-center  w-[100%] text-sm md:text-[1rem] md:w-[70%]  lg:w-[90%]'>{ truncateString(episodes[episodeNum]?.overview , 1000) }</p>
              </div>


            </div>
        </div>
        </div>
      </div>

      <div>
        
      </div>
      {/* <SeriesCast/>
      <MovieTrailer/>
      <Posters />
      <SimilarMovies  /> */}
      <TvShowCrew data={ episodes[episodeNum] } />
    </div>
  )
}

export default EpisodeInfo