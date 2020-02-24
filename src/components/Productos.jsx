import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Productos extends Component {

  render() {
    return (
      <table className='highlight'>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Departamento</th>
            <th>Opciones</th>
          </tr>
        </thead>

        <tbody>
          {this.props.productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.departamentoId}</td>
              <td>
                <Link
                  className='btn waves-effect waves-light yellow darken-1'
                  to={`/productos/editar/${producto.id}`}
                >
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Productos;
