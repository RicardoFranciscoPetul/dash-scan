import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Client from './clients/Client';

import AgregarProducto from './components/AgregarProducto';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import EditarProducto from './components/EditarProducto';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: []
    };
    this.client = new Client();
    this.getProductos();
  }
  getProductos = async () => {
    const response = await this.client.getProductos();
    this.setState({
      productos: response.data
    });
  };
  render() {
    return (
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/productos/nuevo' component={AgregarProducto} />
            <Route
              exact
              path='/productos/editar/:id'
              render={props => {
                const idProducto = props.match.params.id;
                const producto = this.state.productos.filter(
                  producto => producto.id === idProducto
                );
                console.log(producto);
                return <EditarProducto producto={producto[0]} />;
              }}
            />
            <Route exact path='/' render={() => <Productos productos={this.state.productos} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
