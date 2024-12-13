/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux';

const Body = () => {
  const movie = useSelector((state) => state.movies)
  return (
    <div className='p-4'>
      <div className='text-blue-500 font-semibold text-3xl pt-16 pl-32'>
            Show Your Favorite Movies
          </div>
          {/* movie card */}
          <div className='grid grid-flow-row grid-cols-5 p-32 gap-8'>
          {movie.map((data,index) => (
            <div className='bg-white grid grid-rows-2' key={index}>
            <div className='row-span-2 bg-white'>
                <img src={data.poster} 
                onError={(event) => {
                  event.target.src = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXJyb3J8ZW58MHx8MHx8fDA%3D"
                }} 
                className="data-poster bg-cover" />
            </div>
            <div id='title' className='text-center font-semibold text-lg text-white bg-slate-700 p-4'>
                <h1>{data.title}</h1>
            </div>
          </div>
          ))}
                    
    </div>
    </div>
  )
}

export default Body