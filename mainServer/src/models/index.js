import dotenv from 'dotenv'

dotenv.config();
import mongoose from "mongoose";
import logger from '../../../utils/logger.js';

async function main() {
    let connString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.piteziz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    await mongoose.connect(connString);
}

main()
    .then(() => logger.info('database connected'))
    .catch(err => logger.error(err));


