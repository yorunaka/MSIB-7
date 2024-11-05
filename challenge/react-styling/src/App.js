import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
