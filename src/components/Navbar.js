import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary dark" style={{padding:'0px'}} >
    <div className="container-fluid" style={props.navStyle}>
      <Link className="navbar-brand" to="/"> {props.title} </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" >{props.home}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" >About text</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">{props.search}</button>
        </form> */}
        {/* <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggleMode} />
          <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault"> {props.lableText} </label>
        </div> */}
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
                    aboutText : PropTypes.string.isRequired,
                    search : PropTypes.string.isRequired,
                    home : PropTypes.string.isRequired

}

