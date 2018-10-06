const got = require('got');

const endpoints = {
  documentation: 'https://querijn.codes/api_status/',
  api: 'https://querijn.codes/api_status/1.1/'
};

function down(apistatus) {
  return new Promise((resolve, reject) =>{
    try {
      var array = []; // Array
      for (const api in apistatus ) {
        array.push({name: api, value: apistatus[api]})
      };
      var down = array.filter(valeur => valeur.value['state'] == 'down');
      resolve(down);
    } catch (e) {
      reject({erreur: e});
    }
  });
}

function troubled(apistatus) {
  return new Promise((resolve, reject) =>{
    try {
      var array = []; // Array
      for (const api in apistatus ) {
        array.push({name: api, value: apistatus[api]})
      };
      var down = array.filter(valeur => valeur.value['state'] == 'troubled');
      resolve(down);
    } catch (e) {
      reject({erreur: e});
    }
  });
}

function up(apistatus) {
  return new Promise((resolve, reject) =>{
    try {
      var array = []; // Array
      for (const api in apistatus ) {
        array.push({name: api, value: apistatus[api]})
      };
      var down = array.filter(valeur => valeur.value['state'] == 'up');
      resolve(down);
    } catch (e) {
      reject({erreur: e});
    }
  });
}

module.exports = 
class APIStatusAPI {
  constructor() {
    this.documentation = endpoints.documentation;
    this.api = endpoints.api;
  
  }
  
}
