import React from 'react'
import Background from '../../Assets/Images/back.png'
import requests from '../Requests'
import axios from 'axios'
import { useState , useEffect,createContext, useContext } from 'react'
import Main from '../Main'
import { easeIn, easeInOut,easeOut , motion , AnimatePresence} from 'framer-motion'
import Recomendations from '../Recomendations'
import Popular from '../Popular'
import SerachIcon from '../../Assets/Icons/mSearch.png'
import NavBar from '../NavBar'
import Exit from '../../Assets/Icons/exitBurger.png'
import { Link } from 'react-router-dom'

const Home = () => {

  const [movies, setMovies] = useState([]);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  const [errMessage, setErrMessage] = useState("");
  const [errModal, setErrModal] = useState(false);
  
  //asynchoronous function to fetch data from the api 

  const fetchData = async () => {
     axios.request(requests.requestPopular).then(resp => {
      setMovies(resp.data.results)
      // console.log(resp.data.results)
     }).catch(err => {
      setErrModal(true)
      console.log(err.message)
      setErrMessage(err.message)
    })
  }
  useEffect(() => {
    fetchData();
  }, [])
 

  const handleSearchBar = (value) => {
    setSearchBar(value)
  }

  return (
    <div className='h-screen w-full relative'>
       <Link to={`/movie/${randomMovie?.id}`} className='absolute overflow-x-hidden w-full h-full top-0 '>
        <motion.img
          initial={{ scale: 0.97 }}
          animate={{ scale: 1 }}
          transition={{duration:2 , easeIn ,}}
          className=' bg-center object-cover md:block w-full h-full ' src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`} alt="" />
        <div className='bg-black/60 w-full h-full absolute top-0'></div>
      </Link>


     
      
      <Main data={randomMovie} id={randomMovie?.id} />
      <Recomendations />      
      
    </div>
  )
}

export default Home
// onClick={()=> setSearchBar(false)} 