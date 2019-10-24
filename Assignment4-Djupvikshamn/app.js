const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.static('Assets'));

app.listen(PORT, ()=>console.log(`Running`));