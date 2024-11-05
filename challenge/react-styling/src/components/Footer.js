import 'bootstrap/dist/css/bootstrap.min.css'
import react from 'react'

function Footer() {
  return (
    <footer className='text-muted py-5 border-top'>
        <div className='container'>
            <p className='mb-1'>
                This is my first react app bootstrap
            </p>
            <p className='mb-0'>
                New to React? Visit the homepage.
            </p>
        </div>
    </footer>
  );
}

export default Footer;