const admin = () => {
    const admin = require('firebase-admin');
    let serviceAccount = require("../permissions.json");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://soa-proj.firebaseio.com"
    });

};

module.exports = admin;