const urlProd = 'https://us-central1-soa-proj.cloudfunctions.net/';
const urlDev = 'http://localhost:5000/soa-proj/us-central1/';
const production = true;

export const api_items = {
    create: () => `${production ? urlProd : urlDev}items/create/`,
    readId: (petId) => `${production ? urlProd : urlDev}items/read/${petId}`,
    readAll: () => `${production ? urlProd : urlDev}items/read/`,
    update: (petId) => `${production ? urlProd : urlDev}items/update/${petId}`,
    delete: (petId) => `${production ? urlProd : urlDev}items/delete/${petId}`
};

