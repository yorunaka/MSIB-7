
import './App.css'

function App() {
  

  return (
    <div>
      {/* header */}
      <div className='max-w-full flex bg-orange-700 justify-around m-0 p-4'>
          <div className='text-2xl font-semibold text-white'>
            <h1>Netflixify</h1>
          </div>
          <div className='grid grid-flow-row grid-cols-4 w-96 items-stretch'>
              <div className='col-span-3'>
                <input 
                type="search"
                placeholder='Search by title'
                className='relative m-0 -mr-0.5 block w-full rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-slate-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary' />
              </div>
              <button>
                <div className='bg-blue-700 flex justify-center items-center h-full w-full rounded-r '>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50"
                  className=''>
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                  </svg>
                </div>
              </button>
          </div>
      </div>

    </div>
  )
}

export default App
