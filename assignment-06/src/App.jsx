import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='h-screen w-full top-0 overflow-x-hidden bg-slate-300'>
      <Navbar />

      {/* movie section */}
      <div className='p-4'>
          <div className='text-blue-500 font-semibold text-3xl pt-16 pl-32'>
            Show Your Favorite Movies
          </div>
          {/* movie card */}
          <div className='grid grid-flow-row grid-cols-5 p-32 gap-8'>
            <div className='bg-white grid grid-rows-2'>
              <div id='image' className='row-span-2'>
                <img src="./src/assets/movieImg1.jpg" alt="" />
              </div>
              <div id='title' className='text-center font-semibold text-lg text-white bg-slate-700 p-4'>
                <h1>Vivy: Fluorite Eyes Song</h1>
              </div>
            </div>
            <div className='bg-white grid grid-rows-2'>
              <div id='image' className='row-span-2'>
                <img src="./src/assets/movieImg1.jpg" alt="" />
              </div>
              <div id='title' className='text-center font-semibold text-lg text-white bg-slate-700 p-4'>
                <h1>Vivy: Fluorite Eyes Song</h1>
              </div>
            </div>
            <div className='bg-white grid grid-rows-2'>
              <div id='image' className='row-span-2'>
                <img src="./src/assets/movieImg1.jpg" alt="" />
              </div>
              <div id='title' className='text-center font-semibold text-lg text-white bg-slate-700 p-4'>
                <h1>Vivy: Fluorite Eyes Song</h1>
              </div>
            </div>
            <div className='bg-white grid grid-rows-2'>
              <div id='image' className='row-span-2'>
                <img src="./src/assets/movieImg1.jpg" alt="" />
              </div>
              <div id='title' className='text-center font-semibold text-lg text-white bg-slate-700 p-4'>
                <h1>Vivy: Fluorite Eyes Song</h1>
              </div>
            </div>
            <div className='bg-white grid grid-rows-2'>
              <div id='image' className='row-span-2'>
                <img src="./src/assets/movieImg1.jpg" alt="" />
              </div>
              <div id='title' className='text-center font-semibold text-lg text-white bg-slate-700 p-4'>
                <h1>Vivy: Fluorite Eyes Song</h1>
              </div>
            </div>
            <div className='bg-white grid grid-rows-2'>
              <div id='image' className='row-span-2'>
                <img src="./src/assets/movieImg1.jpg" alt="" />
              </div>
              <div id='title' className='text-center font-semibold text-lg text-white bg-slate-700 p-4'>
                <h1>Vivy: Fluorite Eyes Song</h1>
              </div>
            </div>
            <div className='bg-white grid grid-rows-2'>
              <div id='image' className='row-span-2'>
                <img src="./src/assets/movieImg1.jpg" alt="" />
              </div>
              <div id='title' className='text-center font-semibold text-lg text-white bg-slate-700 p-4'>
                <h1>Vivy: Fluorite Eyes Song</h1>
              </div>
            </div>
            <div className='bg-white grid grid-rows-2'>
              <div id='image' className='row-span-2'>
                <img src="./src/assets/movieImg1.jpg" alt="" />
              </div>
              <div id='title' className='text-center font-semibold text-lg text-white bg-slate-700 p-4'>
                <h1>Vivy: Fluorite Eyes Song</h1>
              </div>
            </div>
            <div className='bg-white grid grid-rows-2'>
              <div id='image' className='row-span-2'>
                <img src="./src/assets/movieImg1.jpg" alt="" />
              </div>
              <div id='title' className='text-center font-semibold text-lg text-white bg-slate-700 p-4'>
                <h1>Vivy: Fluorite Eyes Song</h1>
              </div>
            </div>
            <div className='bg-white grid grid-rows-2'>
              <div id='image' className='row-span-2'>
                <img src="./src/assets/movieImg1.jpg" alt="" />
              </div>
              <div id='title' className='text-center font-semibold text-lg text-white bg-slate-700 p-4'>
                <h1>Vivy: Fluorite Eyes Song</h1>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default App
