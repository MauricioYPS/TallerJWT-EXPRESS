import express from 'express';
import 'dotenv/config';
import './config/database.js';
import cors from 'cors';
import morgan from 'morgan';
import router from './router/index.js';
import error_handler from './middlewares/error_handler.js';
import not_found_handler from './middlewares/not_found_handler.js';
import validation_error_handler from './middlewares/validation_error_handler.js';

const server = express();
const port = process.env.PORT || 8080;
const ready = () => console.log(`Server running on port ${port}`);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));



server.use('/api',router)
server.use(not_found_handler)
server.use(validation_error_handler)
server.use(error_handler)


server.listen(port,ready)