const express = require('express');
const app = express();
const portNum = process.env.portNum || 5000;
require('./database/connection');
const Route = require('./routes/route');

app.use(express.json({ limit: "10mb", extended: true }));


app.use('/api', Route);

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(portNum, err => {
    if (!err) {
        console.log(`Server is running on ${portNum} port!`)
    }
    else {
        console.log(err)
    }
})
