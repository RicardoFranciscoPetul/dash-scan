import HttpClient from './httpClient';
import AppSettings from '../settings/appi.settings';

class Client {
  constructor() {
    this.httpClient = new HttpClient();
    this.appSettings = new AppSettings();
  }

  login = async (username, password) => {
    let response;
    try {
      const request = { username, password };
      response = await this.httpClient.post(this.appSettings.ENDPOINT_GET_ACCES, request);
    } catch (error) {
      return (response = 401);
    }

    return response;
  };
  //Libros
  getProducto = async id => {
    let response;
    try {
      response = await this.httpClient.get(this.appSettings.ENDPOINT_PRODUCTO + '/' + id, {});
      return response;
    } catch (error) {
      console.log('Mi error' + error);
    }
  };
  getProductos = async () => {
    let response;
    try {
      response = await this.httpClient.get(this.appSettings.ENDPOINT_PRODUCTO, {});
      return response;
    } catch (error) {
      console.log('Mi error' + error);
    }
  };
  getDepartamentos = async () => {
    let response;
    try {
      response = await this.httpClient.get(this.appSettings.ENDPOINT_DEPARTAMENTOS, {});
      return response;
    } catch (error) {
      console.log('Mi error' + error);
    }
  };

  createProducto = async producto => {
    const { id, nombre, precio, descripcion, departamentoId } = producto;
    const p = {
      id,
      nombre,
      precio: parseInt(precio),
      descripcion,
      departamentoId: parseInt(departamentoId)
    };
    const response = await this.httpClient.post(this.appSettings.ENDPOINT_PRODUCTO, p);
    console.log(response);
    return response;
  };
  updateProducto = async producto => {
    const { id, nombre, precio, descripcion, departamentoId } = producto;
    const p = {
      id,
      nombre,
      precio: parseInt(precio),
      descripcion,
      departamentoId: parseInt(departamentoId)
    };
    const response = await this.httpClient.put(this.appSettings.ENDPOINT_PRODUCTO + '/' + id, p);
    console.log(response);
    return response;
  };
}
export default Client;
