import React, { Component } from "react";
import { Link } from "react-router-dom";
const NavBar=()=>{
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" to="#">
              newsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              
            >
               
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around">
                <li className="nav-item">
                  <Link className="nav-Link active  text-decoration-none" aria-current="page" to="/" style={{color:"white",margin:"0px 10px 0px 0px"}}>
                    Home
                  </Link>
                </li>
                <li className="nav-item"><Link className="nav-Link active text-decoration-none" to="/about" style={{color:"white",margin:"0px 10px 0px 0px"}}>About</Link></li>
                    <li className="nav-item"><Link className="nav-Link text-decoration-none" to="/business"  style={{color:"white",margin:"0px 10px 0px 0px"}}>Business</Link></li>
                    <li className="nav-item"><Link className="nav-Link text-decoration-none" to="/entertainment"  style={{color:"white",margin:"0px 10px 0px 0px"}}>Entertainment</Link></li>
                    
                    <li className="nav-item"><Link className="nav-Link text-decoration-none" to="/health"  style={{color:"white",margin:"0px 10px 0px 0px"}}>Health</Link></li>
                    <li className="nav-item"><Link className="nav-Link text-decoration-none" to="/science"  style={{color:"white",margin:"0px 10px 0px 0px"}}>Science</Link></li>
                    <li className="nav-item"><Link className="nav-Link text-decoration-none" to="/sports"  style={{color:"white",margin:"0px 10px 0px 0px"}}>Sports</Link></li>
                    <li className="nav-item"><Link className="nav-Link text-decoration-none" to="/technology"  style={{color:"white",margin:"0px 10px 0px 0px"}}>Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }


export default NavBar;
