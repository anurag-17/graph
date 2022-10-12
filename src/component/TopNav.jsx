import React from 'react'
import { Link } from 'react-router-dom';
export const TopNav = () => {
  return (
    <>
      <ul class="nav justify-content-center">
        {/* demo */}


        <li class="nav-item">
          <Link class="nav-link" to="/">GraphA</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/graphB">GraphB</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/graphC">GraphC</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/graphD">GraphD</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/graphE">GraphE</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/graphF">GraphF</Link>
        </li>


      </ul>


    </>
  )
}
