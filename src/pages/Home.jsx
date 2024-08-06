import React from 'react'
import Hero from '../Components/Hero'
import MovieRow from '../Components/MovieRow'
import endpoints from '../services/movieservices'

const Home = () => {
  return <>
  <Hero/>
   <MovieRow title="upcoming" Url={endpoints.upcoming}/>
   <MovieRow title="trending" Url={endpoints.trending}/>
   <MovieRow title="top rated" Url={endpoints.topRated}/>
   <MovieRow title="comedy" Url={endpoints.comedy}/>
   <MovieRow title="popular" Url={endpoints.popular}/>
  </>
}

export default Home