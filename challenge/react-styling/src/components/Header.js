import 'bootstrap/dist/css/bootstrap.min.css'
import react from 'react'

function Header() {
  return (
    <div>
    <nav className="py-2 bg-light border-bottom">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          <li className="nav-item">
            <a href="/" className="nav-link link-dark px-2 active">Home</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link link-dark px-2 ">Features</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link link-dark px-2 ">FAQ</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link link-dark px-2 ">About</a>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <a href="/" className="nav-link link-dark px-2 ">Login</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link link-dark px-2 ">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            My First React App
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0">
            <input type="search" className="form-control" placeholder="Search..."></input>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Header;