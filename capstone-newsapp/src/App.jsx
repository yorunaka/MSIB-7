// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <section className="bg-orange-100/75 min-h-screen top-0">
      {/* navbar */}
      <section className="min-w-full h-52 bg-red-100 grid grid-flow-row grid-cols-3 place-items-center items-center drop-shadow-lg ">
        <div>
          <input type="text" name="" id="" placeholder="Search..." className="px-8 py-2" />
        </div>
        <div>
          <h1>Central Indo News</h1>
        </div>
        <div>
          Harusnya ini logo or, idk
        </div>
      </section>
      
      {/* body */}
      {/* navbar */}
      <div>
        <ul className="flex flex-row justify-center gap-10 mt-14">
          <li><a href="">Indonesia</a></li>
          <li><a href="">Programming</a></li>
          <li><a href="">COVID-19</a></li>
          <li><a href="">Saved</a></li>
        </ul>
        <hr />
      </div>
      {/* contents */}
      <div>
        
      </div>

    </section>
  )
}

export default App
