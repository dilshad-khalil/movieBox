import React, { useEffect, useState } from 'react'
import Emoji from '../Emoji'
import Emojies from '../EmojiPicker'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import requests from '../Requests'
import { Link, useParams } from 'react-router-dom'
import getGenreById from '../getGenreById'
import Seasons from '../Seasons'
const TVShowInfo = () => {
    const { id } = useParams();
    const API_KEY = "9ace0d7ebd683c963c2483c3032415b5";
  const [tvShow, setTVShow] = useState([]);

     const fetchData = async () => {
    await axios.get(    `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`).then(resp => {
      setTVShow(resp.data)
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
        <img className=' bg-center object-cover md:block w-full h-full ' src={`https://image.tmdb.org/t/p/original/${tvShow?.backdrop_path}`} alt="" />
          <div className='bg-black/70  w-full h-full absolute top-0  items-center md:py-10 md:px-14 p-8 md:flex md:flex-row flex justify-center
          md:justify-start flex-col '>
            <img className='md:w-[270px] w-[170px] rounded-md' src={`https://image.tmdb.org/t/p/original/${tvShow?.poster_path}`} alt="" title={tvShow?.tagline} />
            <div className='ml-4  flex flex-col items-center md:items-start gap-2 mt-3 md:mt-0'>
              <h1 className='text-white font-bold text-xl md:text-2xl l text-center md:text-left md:w-[70%]'>{tvShow?.name}</h1>
              <p className='text-[#c1c1c1] text-sm md:text-[1rem]'>{tvShow?.first_air_date} | 2h 36m | <span className='text-ratinColor'>{Math.round(tvShow?.vote_average)}/10 IMDB</span> </p>

              <div className='flex flex-col  justify-center md:justify-start items-center md:items-start mt-1 '>
                <h1 className='text-[#c1c1c1] font-semibold mb-2 text-sm md:text-[1rem] '>Productoin Companies</h1>
                <div className='flex gap-2'>
                 {
                  tvShow?.networks?.map(show => (
                    <div className='bg-[#fff] w-auto h-auto rounded-full p-3 flex justify-center items-center hover:opacity-70 
                    transition-all duration-200 ease-in-out'>
                      <img className='h-3 w-auto  ' src={`https://image.tmdb.org/t/p/original/${show?.logo_path}`} alt="" />
                    </div>
                  ))
                }
                </div>
                
                
              </div>


              <div className='flex gap-2 items-center justify-center md:justify-start flex-wrap mt-2'>
                {
                  tvShow?.genres?.map((genre , index) => (
                    <Link to={`/genre/${genre.name}/${genre.id}`} key={index}
                  className='group hover:bg-ratinColor  border-[1px] border-secondaryColor rounded-full px-6 py-[.4rem]  items-center justify-center text-center'>
                   <p className=' group-hover:text-black group-hover:font-medium transition-all duration-200 ease-in-out text-secondaryColor text-sm' key={index}>{ genre.name }</p>
                </Link>
                  ))
                }
              </div>

              
              <div className='flex flex-col items-center md:items-start gap-2'>
                <h1 className='text-lg font-bold text-white'>Overview</h1>
                <p className='text-[#c1c1c1] text-center md:text-left w-[100%] text-sm md:text-[1rem]  md:w-[80%]'>{ truncateString(tvShow?.overview , 1000) }</p>
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

      <Seasons data={tvShow} />
    </div>
  )
}

export default TVShowInfo