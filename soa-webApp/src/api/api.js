const urlProd = 'https://us-central1-soa-proj.cloudfunctions.net/';
const urlDev = 'http://localhost:5000/soa-proj/us-central1/';
const production = true;

export const api = {
    create: () => `${production ? urlProd : urlDev}pets/create/`,
    readId: (petId) => `${production ? urlProd : urlDev}pets/read/${petId}`,
    readAll: () => `${production ? urlProd : urlDev}pets/read/`,
    update: (petId) => `${production ? urlProd : urlDev}pets/update/${petId}`,
    delete: (petId) => `${production ? urlProd : urlDev}pets/delete/${petId}`
};

