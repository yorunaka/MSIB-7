/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const MovieCard = (props) => {
  const { movie } = props
  return (
        <div className='bg-white grid grid-rows-2'>
            <div className='row-span-2 bg-white'>
                <img src={movie.poster} 
                onError={(event) => {
                  event.target.src = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXJyb3J8ZW58MHx8MHx8fDA%3D"
                }} 
                className="movie-poster" />
            </div>
            <div id='title' className='text-center font-semibold text-lg text-white bg-slate-700 p-4'>
                <h1>{movie.title}</h1>
            </div>
          </div>
   
  )
}

export default MovieCard