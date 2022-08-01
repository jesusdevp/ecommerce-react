const baseUrl = 'https://api.escuelajs.co/api/v1'

// https://api.escuelajs.co/api/v1/products?offset=0&limit=10

export const fetchApi = (endpoint, method= 'GET', data) => {
    const url = `${baseUrl}/${endpoint}`

    if (method === "GET") {
        return fetch(url);
      } else {
        return fetch(url, {
          method,
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }
    };