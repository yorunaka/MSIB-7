import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Body from './components/Body/Body'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [movie, setMovie] = useState([])

  // get movie data
  const fetchData = async (searchTerm) => {
    try {
      const res = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&i=tt3896198&apikey=${import.meta.env.VITE_APIKEY}`)
      // console.log(res.data.Response)
      if (res.data.Response == 'True'){
        console.log(res.data.Search)
      }
    } catch (err) {
      console.log('res : ', err)
    }
  }



  useEffect(() => {
    fetchData('tomorrow never dies')
  }, [])

  return (
    <div className='h-screen w-full top-0 overflow-x-hidden bg-slate-300'>
      <Navbar />
      <Body />

    </div>
  )
}

export default App
