import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { easeIn, easeInOut, easeOut, motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import Emoji from './Emoji'
import Emojies from './EmojiPicker'
const MovieTrailer = () => {
  const [trailer, setTrailer] = useState([]);
  const { movieId } = useParams();
  const API_KEY = "9ace0d7ebd683c963c2483c3032415b5"
  
  const fetchTrailer = async () => {
    await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`).then(resp => {
      setTrailer(resp.data.results)
      // console.log(resp.data)
    }).catch(err => {
      console.log(err);
    })
  }

  const findTrailerLink = () => {
    const trailerLink = trailer?.find(link => link?.type === "Trailer");

    if (trailerLink)
      return(`https://www.youtube.com/embed/${trailerLink.key}`)
    else
      return null
  }

  useEffect(() => {
    fetchTrailer();
  }, [])


  return (
    <div className='md:py-10 md:px-14 p-8'>
             <h1 className='font-bold md:text-xl text-lg text-white flex items-center gap-1'>Movie Trailer <Emoji Emoji={Emojies.popCorn} width={'6'} height={'6'} /></h1>
      
      
         <iframe className='mt-4 w-full h-[300px] md:h-[600px]'
        title="YouTube video player"
        
        src={findTrailerLink()}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h1>{ findTrailerLink() }</h1>
    </div>
  )
}

export default MovieTrailer