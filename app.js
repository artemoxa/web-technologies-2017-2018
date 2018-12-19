const express = require('express');
const app = express();


app.use('/', require('./routes/movies'));


const server = app.listen(process.env.PORT || 5000, function () {
    const port = server.address().port;
    console.log('app is working on port ' + port);
});