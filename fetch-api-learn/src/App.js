import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios'
import { useState, useEffect} from 'react';

function App() {
  // let initTodos = [
  //   {id: '1', title: "Bermain Puzzle", completed: true},
  //   {id: '2', title: "Minum Coklat Panas", completed: false},
  //   {id: '3', title: "Scroll FB", completed:false},
  //   {id: '4', title: "Menghina Kanokari", completed:true},
  //   {id: '5', title: "Turu", completed:false}
  // ]

  const [news, setNews] = useState([])

  useEffect(() => {
      axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params: {
          'q': 'election',
          'api-key': 'Ggv4AMrLgyn9FFPOyJTAaN4CGYKXym0n'
        }
      })
      .then(res => {
        setNews(res.data.response.docs)
      })
    }, [])
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(res => res.json())
  //   .then(data => {
  //     setTodos(data)
  //   })
  // }, [])
  

  return (
    <div className="container my-4">
    <div className="row">
    {
      news.map(item => (
        <div className="col-md-3" key={item._id}>
          <div className="card">
          {item.multimedia && item.multimedia.length > 0 ? (
                <img 
                  src={`https://www.nytimes.com/${item.multimedia[0].url}`} 
                  className="card-img-top" 
                  alt={item.headline.main} 
                />
              ) : (
                <img 
                  src="https://random.imagecdn.app/v1/image?width=500&height=150" 
                  className="card-img-top" 
                  alt="Placeholder" 
                />
              )}
            <div className="card-body">
              <h5 className="card-title">{item.abstract}</h5>
              <p className="card-text">{item.headline.main}</p>
              <a href={item.web_url} className="btn btn-primary">Go Somewhere</a>
            </div>
          </div>
        </div>
      ))
    }
    </div>
  </div>
  //   <div className="container">
  //   <table className="table table-bordered my-3">
  //     <thead>
  //       <tr>
  //         <th>ID</th>
  //         <th>TODO</th>
  //         <th>STATUS</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {
  //         todos.map((todo, index) => (
  //           <tr key={index}>
  //             <td>{todo.id}</td>
  //             <td>{todo.title}</td>
  //             <td>{todo.completed ? 'Sudah' : 'Belum'}</td>
  //           </tr>
  //         ))
  //       }
  //     </tbody>
  //   </table>
  // </div>
  );
}

export default App;
