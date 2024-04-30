const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("He World, I am here for you, Devops Engineer");

});

app.listen(8080, () => {
    console.log('Listening on port 8080');

});
