import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import usePagination from '../hooks/usePagination'

const Covid19 = (props) => {
  const news = useSelector((state) => state.newsData)
  const { handleDuplicate } = useLocalStorage('savedArticles', [])
  const [loading, setLoading] = useState(true)
  const { currentNewsPage, paginate, pageNumbers, currentPage } = usePagination(news || [])


  const cleanDescription = (description) => {
    return description ? description.replace(/\[\+\d+ chars\]/, '').trim() : 'No description available'
  }

  useEffect(() => {
    setLoading('true')
    const fetchData = async () => {
      try {
        await props.getNewsData('covid')
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 1500)
      }
    }

    fetchData()
  },[])

  return (
    <div>
      <div id='title' className='text-center text-3xl pt-6 font-bold'>
        COVID-19 News
      </div>
      {loading ? (
        <div className='flex flex-col items-center'>
        <div className='pt-24 loading loading-ring loading-lg'>
        </div>
          <div className='text-black text-2xl'>
            Fetching News...
        </div>
        </div>
      ) : (
        <div>
        <div className="grid grid-cols-3 p-8">
        {currentNewsPage.map((article, index) => (
          <div className="grid grid-flow-row m-6 gap-2" key={index}>
            <div className="text-sm">
              {article.source.name}
            </div>
            <div className="text-lg font-semibold" id="title">
              {article.title}
            </div>
            <div className="text-gray-500/90" id="writer">
              {article.author}
            </div>
            <div className="text-md line-clamp-3" id="desc">
              {cleanDescription(article.content) || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto officiis voluptatibus distinctio dolorum. Fugiat, nemo cumque dolorem facere a consectetur. Eius quam unde similique velit praesentium alias deserunt a adipisci amet rerum!"}
            </div>
            <div className="flex flex-row gap-4">
                <a href='' onClick={(e)=> {
                  e.preventDefault()
                  window.open(`${article.url}`, "_blank")
                }} rel="noopener noreferrer">
                  <div className="px-3 py-2 bg-orange-400/70 rounded-lg hover:bg-orange-400/50 text-center place-items-center justify-center items-center">
                  Read More...
                  </div>
                </a>                
                <button className="px-3 py-2 bg-blue-400/70 rounded-lg hover:bg-blue-400/50"
                onClick={(e) => {
                  e.preventDefault()
                  handleDuplicate(article)}}>
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
      {pageNumbers.length > 0 && (
        <div className="join flex justify-center mt-4 pb-20">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 border join-item ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {number}
          </button>
        ))}
      </div>
        )}
        </div>
      )}

    </div>
  )
}

export default Covid19