import { useState, useEffect } from 'react'
import axios from "axios"
import Navbar from "./components/Navbar/Navbar"
import Index from "./Router/Index"
import { useDispatch } from 'react-redux'

function App() {
  const [newsDetails, setNewsDetails] = useState('0')
  const dispatch = useDispatch()

  const getNewsData = (newsCategory = '') => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${newsCategory}&apiKey=${import.meta.env.VITE_APIKEY}`)
    .then(response => {
      const res = response.data.articles
      dispatch({ type: 'NEWS_DATA', news: res })
    })
  }

  useEffect(() => {
    getNewsData('')
  },[])

  return (
    <section className="bg-orange-100/75 min-h-screen top-0">
      <Navbar />
      <Index />
    </section>
  )
}

export default App
