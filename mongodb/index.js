const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const url = 'mongodb+srv://ppqita:santri@ppqitadb.dada60q.mongodb.net/';
const {connectionDB} = require('./mongodb-gateway');

let myCollection, myClient;
const initDB = async () => {
    try {
      const { collection, client } = await connectionDB(url,'comment','com');
      myCollection = collection;
      myClient = client;
    } catch (error) {
      console.log(error);
    }
};

initDB();

app.use(express.json());
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Halo cuyy, Server sudah jalan di http://localhost:3000")
})  