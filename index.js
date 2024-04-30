const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(Hi There, My name is Segun A Devops/Linux Engineer ins view);

});

app.listen(8080, () => {
    console.log('Listening on port 8080');

});