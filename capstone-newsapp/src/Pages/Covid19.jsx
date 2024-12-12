import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Covid19 = (props) => {
  const news = useSelector((state) => state.newsData)

  const cleanDescription = (description) => {
    return description ? description.replace(/\[\+\d+ chars\]/, '').trim() : 'No description available'
  }

  useEffect(() => {
    props.getNewsData('covid')
  }, [])

  return (
    <div>
      <div id='title' className='text-center text-3xl pt-6 font-bold'>
        Covid News
      </div>
      <div className="grid grid-cols-3 p-8">
        {news.map((article, index) => (
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
              {cleanDescription(article.content )|| "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto officiis voluptatibus distinctio dolorum. Fugiat, nemo cumque dolorem facere a consectetur. Eius quam unde similique velit praesentium alias deserunt a adipisci amet rerum!"}
            </div>
            <div className="flex flex-row gap-4">
                <a href={article.url}>
                  <div className="px-3 py-2 bg-orange-400/70 rounded-lg hover:bg-orange-400/50 text-center place-items-center justify-center items-center">
                  Read More...
                  </div>
                </a>
              <a href="">                
                <div className="px-3 py-2 bg-blue-400/70 rounded-lg hover:bg-blue-400/50">
                Save
              </div>
                </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Covid19