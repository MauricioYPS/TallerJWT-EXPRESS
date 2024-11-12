import express from 'express';
import 'dotenv/config';
import './config/database.js';

const server = express();
const port = process.env.PORT || 8080;
const ready = () => console.log(`Server running on port ${port}`);

server.get('/', (req, res) => {
    res.send('Hello World!');
})

server.listen(port,ready)