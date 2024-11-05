import 'bootstrap/dist/css/bootstrap.min.css'
import react from 'react'

function Content() {
  return (
    <div className='p-5 mb-4 bg-light rounded-3 border'>
        <div className='container-fluid py-5'>
            <h1 className='display-5 fw-bold'>
                First paragraph in jumbotron
            </h1>
            <p className='col-md-8 fs-4'>
                lorem Ipsum
            </p>
            <button className='btn btn-primary btn-lg'>
                Example Button
            </button>
        </div>
    </div>
  );
}

export default Content;
