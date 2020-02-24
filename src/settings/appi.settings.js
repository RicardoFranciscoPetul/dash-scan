import { Enviroment } from './dev.environment';
class AppSettings {
  constructor() {
    this.API_URL = Enviroment.apiUrl;
    this.ENDPOINT_GET_ACCES = Enviroment.apiUrl + Enviroment.endpointUnauthorized.getAccess;

    this.ENDPOINT_PRODUCTO = Enviroment.apiUrl + Enviroment.endpointUnauthorized.productos;
    this.ENDPOINT_DEPARTAMENTOS = Enviroment.apiUrl + Enviroment.endpointUnauthorized.departamentos;

    const obj = Enviroment.endpointUnauthorized;

    this.UNAUTHORIZED_PATHS = Object.keys(obj).map(function(k) {
      return obj[k];
    });
  }
}
export default AppSettings;
