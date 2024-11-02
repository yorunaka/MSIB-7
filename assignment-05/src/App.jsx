import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [currency, setCurrency] = useState([])

  useEffect(() => {
    axios.get("https://api.currencyfreaks.com/v2.0/rates/latest",{
      params: {
        'apikey': `${import.meta.env.VITE_APIKEY}`, //Your API KEY
        'base': 'USD',
        'symbols': "CAD,EUR,IDR,JPY,CHF,GBP"

      }
    }).then(res => {
      const currencyArray = []
      for (let currencyCode in res.data.rates){
        currencyArray.push({
          code: currencyCode,
          rates: res.data.rates[currencyCode]
        })
      }
      setCurrency(currencyArray)
    }).catch(err => {
      console.log('Error :', err)
    })
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
            {currency.map((data, i) => (
                <tr key={i}>
                  <td>{data.code}</td>
                  <td>{(data.rates * 1.05).toFixed(4)}</td>
                  <td>{(data.rates * 1).toFixed(4)}</td>
                  <td>{(data.rates * 0.95).toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h1>Rates are based from 1 USD</h1>
        <h1>This app is using API from <a href="https://currencyfreaks.com">https://currencyfreaks.com</a></h1>
        </div>
    </div>
  )
}

export default App
