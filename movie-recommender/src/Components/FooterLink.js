import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Trending from './Trending'
import Search from './Search'
import Movies from './Movies'
import TVSeries from './TVSeries'
function FooterLink() {
 
    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/"><Trending></Trending></Link>
              </li>
              <li>
                <Link to="/search"><Search/></Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
    )
}

export default FooterLink