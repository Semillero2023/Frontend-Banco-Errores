import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faAddressBook, faClone, faCopy } from "@fortawesome/free-solid-svg-icons";
import '../pages/styles/style.css'

class Navbar extends React.Component {

  render() {
    
    return (
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        {/* Logo */}
        <a className="navbar-brand navbar-logo" href="/Banco-Errores">
          Banco de Errores
        </a>
        {/* Collapse Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} color="white" />
          {/* <i className="fas fa-bars text-white" /> */}
        </button>
        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* For Styling */}
            <div className="hori-selector">
              <div className="left" />
              <div className="right" />
            </div>
            {/* Nav Links */}
            <li className="nav-item active">
              <a className="nav-link" href="/Banco-Errores">
                {/* <i className="fa fa-home"></i> */}
                <FontAwesomeIcon icon={faHome} />
                Inicio
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/Documentacion">
                <FontAwesomeIcon icon={faAddressBook} />
                {/* <i className="far fa-address-book"></i>  */}
                Documentacion
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Formulario">
                <FontAwesomeIcon icon={faClone} />
                {/* <i className="far fa-clone"></i> */}
                Formulario
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/CargaMasiva">
                <FontAwesomeIcon icon={faCopy} />
                {/* <i className="far fa-copy"></i> */}
                Carga Masiva
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
