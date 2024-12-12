import React from 'react'
import { useState } from 'react'

const Saved = () => {
  const [highlightRows, setHighlightRows] = useState([])

  const highlight = (value) => {
    setHighlightRows
  }

  return (
    <div>
      <div className="overflow-x-auto p-12">
        <table className="table w-full">
          {/* head */}
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
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" 
                  onClick={highlight('bg-blue-400')}/>
                </label>
              </th>
              <td>
                <div className="">
                  <div>
                    <div className="font-semibold">Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>
              </td>
              <td className='line-clamp-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda itaque deleniti fugiat porro libero mollitia vero tempora quos optio nam nostrum numquam saepe, iure culpa unde tempore omnis consequuntur. Rerum, voluptate dolor.
              </td>
              <td>
                Reimu Hakurei
              </td>
              <th className='flex flex-row gap-4 h-full mx-auto'>
                <button className="btn font-medium bg-orange-400/80 px-3 py-2 rounded-md hover:bg-orange-600/60">News Page</button>
                <button className="btn font-medium bg-red-500/80 px-3 py-2 rounded-md hover:bg-red-600/90 hover:text-white">Delete</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" 
                  onClick={highlight('bg-blue-400')}/>
                </label>
              </th>
              <td>
                <div className="">
                  <div>
                    <div className="font-semibold">Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>
              </td>
              <td className='line-clamp-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda itaque deleniti fugiat porro libero mollitia vero tempora quos optio nam nostrum numquam saepe, iure culpa unde tempore omnis consequuntur. Rerum, voluptate dolor.
              </td>
              <td>
                Reimu Hakurei
              </td>
              <th className='flex flex-row gap-4 h-full mx-auto'>
                <button className="btn font-medium bg-orange-400/80 px-3 py-2 rounded-md hover:bg-orange-600/60">News Page</button>
                <button className="btn font-medium bg-red-500/80 px-3 py-2 rounded-md hover:bg-red-600/90 hover:text-white">Delete</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" 
                  onClick={highlight('bg-blue-400')}/>
                </label>
              </th>
              <td>
                <div className="">
                  <div>
                    <div className="font-semibold">Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>
              </td>
              <td className='line-clamp-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda itaque deleniti fugiat porro libero mollitia vero tempora quos optio nam nostrum numquam saepe, iure culpa unde tempore omnis consequuntur. Rerum, voluptate dolor.
              </td>
              <td>
                Reimu Hakurei
              </td>
              <th className='flex flex-row gap-4 h-full mx-auto'>
                <button className="btn font-medium bg-orange-400/80 px-3 py-2 rounded-md hover:bg-orange-600/60">News Page</button>
                <button className="btn font-medium bg-red-500/80 px-3 py-2 rounded-md hover:bg-red-600/90 hover:text-white">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Saved