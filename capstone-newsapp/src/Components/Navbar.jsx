import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>      
    {/* navbar */}
    <section className="min-w-full h-52 bg-red-100 grid grid-flow-row grid-cols-3 place-items-center items-center drop-shadow-lg ">
      <div>
        <input type="text" name="" id="" placeholder="Search..." className="px-8 py-2" />
      </div>
      <div className="text-3xl font-semibold">
        <h1>Central Indo News</h1>
      </div>
      <div>
        ini logo ygy
      </div>
    </section>
    <div>
        <ul className="flex flex-row justify-center gap-10 mt-14">
            <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link px-3 py-2 hover:bg-black/10 focus:border-b-2 focus:border-b-yellow-800"
            to="/"
            >
            Indonesia
            </NavLink>
            <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link px-3 py-2 hover:bg-black/10 focus:border-b-2 focus:border-b-yellow-800"
            to="/Programming"
            >
            Programming
            </NavLink>
            <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link px-3 py-2 hover:bg-black/10 focus:border-b-2 focus:border-b-yellow-800"
            to="/Covid19"
            >
            COVID-19
            </NavLink>
            <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link px-3 py-2 hover:bg-black/10 focus:border-b-2 focus:border-b-yellow-800"
            to="/Saved"
            >
            Saved
            </NavLink>
        </ul>
        <hr />
      </div>
    </div>
  )
}

export default Navbar