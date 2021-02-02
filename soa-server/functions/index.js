const functions = require('firebase-functions');
const admin = require('./config/db')();

const petsApi = require("./endpoints/pets");
const itemsApi = require("./endpoints/items");

const https = functions.region("us-central1").https;

module.exports.pets = https.onRequest(petsApi);
module.exports.items = https.onRequest(itemsApi);
