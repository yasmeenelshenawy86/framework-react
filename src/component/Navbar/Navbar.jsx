import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Navbar() {
  const [pathName, setPathName] = useState("")
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container p-2">
        <Link className="navbar-brand text-uppercase fw-bold fs-2" to="/">start framework</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <Link onClick={() => {setPathName("/about")}} className={pathName === '/about' ? "nav-link active" : "nav-link"} aria-current="page" to="/about">about</Link>
            </li>
            <li className="nav-item px-2">
              <Link onClick={() => {setPathName("/portfolio")}} className={pathName === '/portfolio' ? "nav-link active" : "nav-link"} aria-current="page" to="/portfolio">portfolio</Link>
            </li>
            <li className="nav-item px-2">
              <Link onClick={() => {setPathName("/contact")}} className={pathName === '/contact' ? "nav-link active" : "nav-link"} aria-current="page" to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</>
}
