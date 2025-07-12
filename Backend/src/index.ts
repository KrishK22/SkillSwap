import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'

import { connectDB } from './lib/db';
import publicRoute from './routes/publicRoutes'


dotenv.config();
const port = process.env.PORT

const app = express();


app.use(cookieParser());
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use('/api/public', publicRoute)





app.listen(port, () => {
    console.log(`Backend listening on port - ${port}`)
    connectDB()
})