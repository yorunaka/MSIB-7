import React from 'react'
import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const Saved = () => {
  // const [highlightRows, setHighlightRows] = useState([])

  // const highlight = (value) => {
  //   setHighlightRows
  // }
  const { saveItems, storedValue } = useLocalStorage('savedArticles', []);

  const cleanDescription = (description) => {
    return description ? description.replace(/\[\+\d+ chars\]/, '').trim() : 'No description available'
  }

  const handleDeleteNews = (index) => {
    const updateNews = storedValue.filter((_, i) => i !== index)
    saveItems(updateNews)
    alert('Berita sudah dihapus.')
  }

  return (
    <div>
      <div className="overflow-x-auto p-12">
      {storedValue.length == 0 ? (
            <div className='text-center text-4xl'>No Saved News.</div>
          ) : (
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className='w-1/3'>Title</th>
              <th className='w-1/3'>Description</th>
              <th>Author</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {storedValue.map((article, index) => (
            <tr key={index}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" 
                  />
                </label>
              </th>
              <td>
                <div className="">
                  <div>
                    <div className="font-semibold">{article.title}
                    </div>
                  </div>
                </div>
              </td>
              <td className='line-clamp-3'>
                {cleanDescription(article.content)}
              </td>
              <td>
                {article.author}
              </td>
              <th className='flex flex-row gap-4 h-full mx-auto'>
                <a href={article.url}>
                  <button className="btn font-medium bg-orange-400/80 px-3 py-2 rounded-md hover:bg-orange-600/60">News Page</button>
                </a>
                <button className="btn font-medium bg-red-500/80 px-3 py-2 rounded-md hover:bg-red-600/90 hover:text-white"
                onClick={() => handleDeleteNews(index)}>Delete</button>
              </th>
            </tr>

            ))}
          </tbody>
        </table>
          )}
      </div>
    </div>
  )
}

export default Saved