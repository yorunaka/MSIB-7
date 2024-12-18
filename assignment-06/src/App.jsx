  import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Body from './components/Body/Body'
import Navbar from './components/Navbar/Navbar'


function App() {
  const [movies, setMovies] = useState('')
  const dispatch = useDispatch()
  
  const handleSubmit = async (query) => {
      setMovies(query)
      fetchData(query)
  }
  // get movie data
  const fetchData = async (keyword = 'action') => {
    try {
      const apiURL = `https://www.omdbapi.com/?s=${keyword}&apikey=${import.meta.env.VITE_APIKEY}`
      const res = await axios.get(apiURL)
      if (res.status == 200){
        const result = res.data.Search?.map((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
        }));
        dispatch({ type: 'INSERT_MOVIES', movies: result })
      }

      if(!res.data.Search){
        throw new Error('Movies not found.')
      }

    } catch (err) {
      console.log('res : ', err)
    }
  }



  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='h-screen w-full top-0 overflow-x-hidden bg-slate-300'>
      <Navbar 
      onSearchSubmit={handleSubmit}/>
      <Body 
      movies={movies}/>

    </div>
  )
}

export default App
