const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.send({
    msg: 'Welcome, Infrustructure has been set up and ready to run CI/CD'
   })
});

app.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});