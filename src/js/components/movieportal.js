import React from 'react'
import MovieDetail from './moviedetail'
import MovieList from '../containers/movielist'
const MoviePortal = () => (
    <div>
      <h2>Movie's Lists:</h2>
      <MovieList/>
      <hr/>
      <h2>Movie's Detail:</h2>
      <MovieDetail/>
    </div>
)
export default MoviePortal
