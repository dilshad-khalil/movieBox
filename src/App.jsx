import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import About from './Components/Pages/About'
import Genres from './Components/Pages/Genres'
import Home from './Components/Pages/Home'
import MovieInfo from './Components/Pages/MovieInfo'
import PopularMovies from './Components/Pages/PopularMovies'
import PostersPage from './Components/Pages/PostersPage'
import SearchPage from './Components/Pages/SearchPage'
import Crew from './Components/Pages/Crew'
import Popular from './Components/Popular'
import UpcomingMovies from './Components/Pages/UpcomingMovies'
import TrendingPage from './Components/Pages/TrendingPage'
import TVShows from './Components/Pages/TVShows'
import TVShowInfo from './Components/Pages/TVShowInfo'
import Episodes from './Components/Pages/Episodes'
import EpisodeInfo from './Components/Pages/EpisodeInfo'
import SimilarMovies from './Components/SimilarMovies'

const App = () => {

  return (
     <div>
       <Router>
         <NavBar/>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/movie/:movieId' element={ <MovieInfo/> } />
           <Route path='/movie/:movieId' element={ <SimilarMovies/> } />
           <Route path='/search/:query' element={ <SearchPage/> } />
           <Route path='/genre/:genre/:genreId' element={ <Genres/> } />
           <Route path='/popular' element={ <PopularMovies/> } />
          <Route path='/about' element={<About />} />
          <Route path='/posters/:posterId' element={<PostersPage />} />
          <Route path='/crew/:movieId' element={<Crew />} />
          <Route path='/upcoming' element={<UpcomingMovies />} />
          <Route path='/trending' element={<TrendingPage />} />
          <Route path='/tvshows' element={<TVShows />} />
          <Route path='/tvshows/:id' element={<TVShowInfo />} />
          <Route path='/season/:id/:season' element={<Episodes />} />
          <Route path='/tvshow/:movieId/season/:seasonNum/episode/:episodeNum' element={<EpisodeInfo />} />
         </Routes>
       </Router>
      </div>
    
      
  )
}

export default App