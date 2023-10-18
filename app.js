const express = require('express');
const { postCom } = require('./crud/post');
const { connectionDB } = require('./mongodb/mongodb-gateway');
const app = express();

app.use(express.static('public'));
app.use(express.json());

connectionDB();

app.post('/', postCom);

app.listen(3000, () => {
    console.log("Halo cuyy, Server sudah jalan di http://localhost:3000")
});