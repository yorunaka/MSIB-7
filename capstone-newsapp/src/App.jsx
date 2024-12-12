import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import Navbar from "./components/Navbar/Navbar"
import Index from "./Router/Index"
import { useDispatch } from 'react-redux'

function App() {
  const [newsValue, setNewsValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()

  const handleNewsQuery = async (query) => {
    // console.log(query)
    setNewsValue(query)
    setSearchValue(query)
    getNewsData(newsValue)
  }

  const getNewsData = (newsCategory = 'indonesia') => {
    axios.get(`https://newsapi.org/v2/everything?q=${newsCategory}&apiKey=${import.meta.env.VITE_APIKEY}`)
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
      <Navbar newsValue={handleNewsQuery}/>
      <Index getNewsData={getNewsData} searchValue={searchValue}/>
    </section>
  )
}

export default App