import './App.css';
import CounterFunc from './Components/CounterFunc';
import CounterClass from './Components/CounterClass';

function App() {
  return (
    <div className="container mx-auto">
      <div className="text-center my-3">
        <h1 className="text-4xl font-semibold">Counter in React</h1>
      </div>
      <hr />
      <div className="grid grid-flow-row grid-cols-2 text-center gap-4">
        <CounterFunc />
        <CounterClass />
      </div>
    </div>
  );
}

export default App;
