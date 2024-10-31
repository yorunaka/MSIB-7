import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get("https://api.currencyfreaks.com/v2.0/rates/latest"
      'api-key': 'YOURAPIKEY'
    )
  
    return () => {
      second
    }
  }, [])
  

  return (
    <div className="h-screen w-full flex justify-center items-center bg-orange-600">
        <div className="text-white text-center">
          <h1>Display Rate Currency</h1>
        <div className="my-3">
          <table className="table-auto">
            <thead >
              <tr>
                <th className="px-4 py-2">Currency</th>
                <th className="px-4 py-2">We Buy</th>
                <th className="px-4 py-2">Exchange Rate</th>
                <th className="px-4 py-2">We Sell</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
    </div>
  )
}

export default App
