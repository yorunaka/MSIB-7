/* eslint-disable no-unused-vars */
import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux';

const Body = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className='p-4'>
      <div className='text-blue-500 font-semibold text-3xl pt-16 pl-32'>
            Show Your Favorite Movies
          </div>
          {/* movie card */}
          <div className='grid grid-flow-row grid-cols-5 p-32 gap-8'>
          {movies.map((movie,index) => (
            <MovieCard key={index} movie={movie}/>
            // <h1 key={index}>hello world</h1>
          ))}
                    
    </div>
    </div>
  )
}

export default Body