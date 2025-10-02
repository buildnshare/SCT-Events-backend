import dotenv from 'dotenv';

dotenv.config();

import express from 'express'
import logger from './utils/logger.js';

const protocol = process.env.PROTOCOL;
const host = process.env.HOST;
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    logger.info(`server listening on ${protocol}://${host}:${port} `)
})

