import {useState} from 'react'

function CounterFunc() {
    const [counter, setCounter] = useState(0)
    const [userInput, setUserInput] = useState(0)

    const handleEventChange = (e) => {
        setUserInput(e.target.value)
    }

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () =>{
        setCounter(counter - 1)
    }

    const newIncrement = () => {
        setCounter(counter + 5)
    }

    const NewDecrement = () =>{
        setCounter(counter - 5)
    }

    const incrementByUserInput = () => {
        setCounter(counter + parseInt(userInput))
    }
    
    const decrementByUserInput = () => {
        setCounter(counter - parseInt(userInput))
    }

    return (
        <div className="col-md-6 my-3">
            <h2 className="text-2xl font-medium">Functional Component</h2>
            <h1 className="text-3xl font-medium my-3">{counter}</h1>
            <div className="grid grid-cols-4 gap-4">
                <button className="bg-green-700 px-3 py-2 text-white rounded-lg" onClick={decrement}>-</button>
                <button className="bg-green-700 px-3 py-2 text-white rounded-lg" onClick={NewDecrement}> -5 </button>
                <button className="bg-green-700 px-3 py-2 text-white rounded-lg" onClick={newIncrement}> +5 </button>
                <button className="bg-green-700 px-3 py-2 text-white rounded-lg" onClick={increment}>+</button>
            </div>
            {/* increment and decrement by userInput value */}
            <input type="text" 
            className="text-center border border-gray-400 rounded-lg px-3 py-2 mt-4" 
            value={userInput}
            onChange={handleEventChange} />
            <div className="grid grid-flow-row grid-cols-2 gap-4 my-4">
                <button className="bg-green-700 px-3 py-2 text-white rounded-lg" onClick={decrementByUserInput}> -{userInput} </button>
                <button className="bg-green-700 px-3 py-2 text-white rounded-lg" onClick={incrementByUserInput}>+{userInput}</button>
            </div>
        </div>
    )
}

export default CounterFunc