import { useState, useEffect } from 'react'
import axios from "axios"
import Navbar from "./components/Navbar/Navbar"
import Index from "./Router/Index"
import { useDispatch } from 'react-redux'

function App() {
  const [newsQueue, setNewsQueue] = useState('0')
  const dispatch = useDispatch()

  const handleNewsSubmit = async (query) => {
    setNewsQueue(query)
    getNewsData(newsQueue)
  }

  const getNewsData = (newsCategory = 'indonesia') => {
    axios.get(`https://newsapi.org/v2/everything?q=${newsCategory}&from=2024-11-10&sortBy=publishedAt&apiKey=${import.meta.env.VITE_APIKEY}`)
    .then(response => {
      const res = response.data.articles.filter(
        (article) =>
          article.title !== "[Removed]" &&
          article.description !== "[Removed]" &&
          article.author !== null &&
          article.title !== null &&
          article.url !== null
      )
      dispatch({ type: 'NEWS_DATA', news: res })
    })
  }

  useEffect(() => {
    getNewsData()
  },[])

  return (
    <section className="bg-orange-100/75 min-h-screen top-0">
      <Navbar submitNews={handleNewsSubmit}/>
      <Index getNewsData={getNewsData}/>
    </section>
  )
}

export default App
