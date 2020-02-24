import React, { Component } from 'react';
import Client from '../clients/Client';
import Loader from './Loader';
import { withRouter } from 'react-router-dom';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departamentos: [],
      producto: {
        id: this.props.producto.id,
        nombre: this.props.producto.nombre,
        precio: this.props.producto.precio,
        descripcion: this.props.producto.descripcion,
        departamentoId: this.props.producto.departamentoId
      },

      subiendo: false
    };
    this.client = new Client();
    this.getDepa();
  }

  getDepa = async () => {
    const response = await this.client.getDepartamentos();
    this.setState({
      departamentos: response.data
    });
  };
  handleChange = e => {
    this.setState({
      ...this.state,
      producto: {
        ...this.state.producto,
        [e.target.name]: e.target.value
      }
    });
  };
  actualizar = async e => {
    e.preventDefault();
    this.props.history.push('/');
    this.setState({ subiendo: true });
    const response = await this.client.updateProducto(this.state.producto);
    this.setState({ subiendo: false });
  };
  render() {
    let optionsItem = this.state.departamentos.map((data, index) => (
      <option key={index} value={data.id}>
        {data.nombre}
      </option>
    ));
    return (
      <>
        <div className='row'>
          <h2 className='col s12 m8 offset-m2'>Editar</h2>
        </div>
        <div className='row'>
          <form className='col s12 m8 offset-m2 ' onSubmit={this.actualizar}>
            <div className='row'>
              <div className='input-field col s6'>
                <input
                  id='codigo'
                  type='number'
                  className='validate'
                  name='id'
                  placeholder='Codigo'
                  onChange={this.handleChange}
                  value={this.state.producto.id}
                />
                <label htmlFor='codigo'>Codigo de barras</label>
              </div>
              <div className='input-field col s6'>
                <input
                  id='nombre'
                  type='text'
                  className='validate'
                  name='nombre'
                  onChange={this.handleChange}
                  value={this.state.producto.nombre}
                />
                <label htmlFor='nombre'>Nombre del producto</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s6'>
                <input
                  id='precio'
                  type='number'
                  className='validate'
                  name='precio'
                  onChange={this.handleChange}
                  value={this.state.producto.precio}
                />
                <label htmlFor='precio'>Precio unitario $</label>
              </div>
              <div className='input-field col s6'>
                <input
                  id='descripcion'
                  type='text'
                  className='validate'
                  name='descripcion'
                  onChange={this.handleChange}
                  value={this.state.producto.descripcion}
                />
                <label htmlFor='descripcion'>Descripción breve del producto</label>
              </div>
            </div>
            <div className='row'>
              <div className='col s6'>
                <select
                  className='browser-default'
                  onChange={this.handleChange}
                  name='departamentoId'
                  value={this.state.producto.departamentoId}
                  defaultValue={'0'}
                >
                  <option value='0' selected disabled>
                    Elige un departamento
                  </option>
                  {optionsItem}
                </select>
                <label>Departamento</label>
              </div>
              <div className='col s6'>
                <button
                  className='btn waves-effect waves-light orange darken-3'
                  type='submit'
                  name='action'
                >
                  Actualizar
                  <i className='material-icons right'>send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='row'>
          <div className='col m2 offset-m5'>{this.state.subiendo && <Loader />}</div>
        </div>
      </>
    );
  }
}

export default withRouter(Formulario);
