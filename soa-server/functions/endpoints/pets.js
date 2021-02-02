const app = require("../config/express")();
const db = require('firebase-admin').firestore();

/**
 * /pets
 */

// create
app.post('/create', (req, res) => {
    (async () => {
        try {
            await db.collection('pets').doc('/' + req.body.id + '/')
                .create({
                    name: req.body.name,
                    age: req.body.age,
                    description: req.body.description
                });
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// read pet
app.get('/read/:pet_id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('pets').doc(req.params.pet_id);
            let pet = await document.get();
            let response = pet.data();
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// read all
app.get('/read', (req, res) => {
    (async () => {
        try {
            let query = db.collection('pets');
            let response = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedpet = {
                        id: doc.id,
                        name: doc.data().name,
                        age: doc.data().age,
                        description: doc.data().description
                    };
                    response.push(selectedpet);
                }
                return response;
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// update
app.put('/update/:pet_id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('pets').doc(req.params.pet_id);
            await document.update({
                name: req.body.name,
                age: req.body.age,
                description: req.body.description
            });
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// delete
app.delete('/delete/:pet_id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('pets').doc(req.params.pet_id);
            await document.delete();
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

module.exports = app;