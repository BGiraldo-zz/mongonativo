const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:27017';
const dbname = 'asignaturas';
const collectionName = 'estudiantes';
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the server
client.connect(function (err) {
    if (err) return console.log("Error " + err);
    console.log("Connected successfully to server");

    let db = client.db(dbname);
    let collection = db.collection(collectionName);

    collection.insertOne(
        {
            nombre: "Pepito",
            math: 4,
            science: 3,
            english: 3.4
        }, (err, result) => {
            if (err) return console.log("Error al insert");
            return console.log(result.ops);
        }
    );
    client.close();
});