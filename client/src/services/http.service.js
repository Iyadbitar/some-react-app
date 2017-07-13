let instance = null;

class HttpService {

  constructor() {
    // enforce singelton
    if(!instance){
      instance = this;
    }
    return instance;
  }

  get(url, queryObject) {
    let headers = new Headers();
    const q = queryObject ? this.buildQueryString(queryObject) : '';

    // below 2 line should return fetch result if there is an API end point
    // return fetch(url + q)
    //   .then( (response) => response.json() );

    return Promise.resolve(
       {
         widgets: [
           {
             id: 1,
             name: "Nice Widget",
             unitPrice: 10.00,
             quantity: 1,
           },
           {
             id: 2,
             name: "Awesome Widget",
             unitPrice: 15.00,
             quantity: 10,
           },
           {
             id: 3,
             name: "Amazing Widget",
             unitPrice: 7.00,
             quantity: 8,
           },
           {
             id: 4,
             name: "Some Widget",
             unitPrice: 23.00,
             quantity: 4,
           }
         ]
       }
    );

  }

  buildQueryString(queryObject) {
    return Object.keys(queryObject).reduce( (acc, key) => {
      return `${acc}&${key}=${queryObject[key]}`;
    }, '?')
  }

}

export default HttpService;
