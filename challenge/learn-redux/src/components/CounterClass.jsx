import React from 'react'
import { connect } from 'react-redux'

class CounterClass extends React.Component {
    constructor(){
        super()
        this.state = {
            counter: 0,
            userInput: 0
        }
    }

    handleEventChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    newIncrement = () => {
        this.setState({
            counter: this.state.counter + 5
        })
    }

    newDecrement = () => {
        this.setState({
            counter: this.state.counter - 5
        })
    }

    incrementByUserInput = () => {
        this.setState({
            counter: this.state.counter + parseInt(this.state.userInput)
        })
    }

    decrementByUserInput = () => {
        this.setState({
            counter: this.state.counter - parseInt(this.state.userInput)
        })
    }

    reduxIncrement = () => {
        this.props.dispatch({
          type: 'INCREMENT'
        })
      }

    reduxIncrementBy10 = () => {
        this.props.dispatch({
          type: 'INCREMENT_BY_10'
        })
    }
  
    reduxDecrement = () => {
        this.props.dispatch({
          type: 'DECREMENT'
        })
    }

    render(){
        return (
            <div className="col-md-6 my-3">
                <h2 className="text-2xl font-medium">Class Component</h2>
                <h1 className="text-3xl font-medium my-3">
                    {this.state.counter} - {this.props.globalCounter}
                    </h1>
                <div className="grid grid-cols-4 gap-4">
                    <button className="bg-blue-700 px-3 py-2 text-white rounded-lg" onClick={this.decrement}>-</button>
                    <button className="bg-blue-700 px-3 py-2 text-white rounded-lg" onClick={this.newDecrement}> -5 </button>
                    <button className="bg-blue-700 px-3 py-2 text-white rounded-lg" onClick={this.newIncrement}> +5 </button>
                    <button className="bg-blue-700 px-3 py-2 text-white rounded-lg" onClick={this.increment}>+</button>
                    <hr />
                    <button className="bg-black px-3 py-2 text-white rounded-lg" onClick={this.reduxDecrement}>-</button>
                    <button className="bg-black px-3 py-2 text-white rounded-lg" onClick={this.reduxIncrement}>+</button>
                    <button className="bg-black px-3 py-2 text-white rounded-lg" onClick={this.reduxIncrementBy10}>+10</button>
                </div>
                {/* increment and decrement by userInput */}
                <input type="text" 
                className="text-center border border-gray-400 rounded-lg px-3 py-2 mt-4" 
                value={this.state.userInput}
                onChange={this.handleEventChange} />
                <div className="grid grid-flow-row grid-cols-2 gap-4 my-4">
                    <button className="bg-blue-700 px-3 py-2 text-white rounded-lg" onClick={this.decrementByUserInput}> - {this.state.userInput} </button>
                    <button className="bg-blue-700 px-3 py-2 text-white rounded-lg" onClick={this.incrementByUserInput}>+{this.state.userInput}</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      globalCounter: state.counter
    }
  }

export default connect (mapStateToProps)(CounterClass)