import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navbar-fixed">
    <nav className="grey darken-4">
      <div className="container">
        <Link to="/" className="brand-logo">Movie Box</Link>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/popular">Popular</NavLink></li>
          <li><NavLink to="/genres">Genres</NavLink></li>
          <li><NavLink to="/todos">Todo</NavLink></li>
        </ul>
      </div>
    </nav>
  </div>
  )
}


export default Nav
