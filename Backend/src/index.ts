import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'

import { connectDB } from './lib/db';


dotenv.config();
const port = process.env.PORT

const app = express();


app.use(cookieParser());
app.use(express.json())






app.listen(port, () => {
    console.log(`Backend listening on port - ${port}`)
    connectDB()
})