const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // Add HTML styling for blue background and font size 20
    const htmlResponse = `
    <html>
        <head>
            <style>
                body {
                    background-color: blue;
                    font-size: 40px;
                    color: white; /* Set font color to white for better visibility */
                }
            </style>
        </head>
        <body>
            <p>Hello World, This Segun and i am here for you, Devops Engineer</p>
        </body>
    </html>
    `;
    res.send(htmlResponse);
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});

