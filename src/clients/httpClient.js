/* eslint-disable */

import axios from 'axios';

export default class HttpClient {
  toQueryString = json => {
    return (
      '?' +
      Object.keys(json)
        .map(function(key) {
          let objectType;
          if (typeof json[key] === 'object') {
            objectType = JSON.stringify(json[key]);
          } else {
            objectType = encodeURIComponent(json[key]);
          }
          let r = encodeURIComponent(key) + '=' + objectType;
          return r;
        })
        .join('&')
    );
  };
  get = async (url, request) => {
    let query = '';
    Object.entries(request).length !== 0 ? (query = this.toQueryString(request)) : '';
    const response = await axios.get(`${url}${query}`);
    return response;
  };
  post = async (url, request) => {
    return await axios.post(url, request);
  };
  delete = async (url, request) => {
    return await axios.delete(url, request);
  };
  put = async (url, request) => {
    return await axios.put(url, request);
  };
}
