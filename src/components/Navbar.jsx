import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Productos</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/productos/nuevo">Agregar Producto</Link></li>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;