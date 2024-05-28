// This file is used to set up an Express server for handling incoming requests. 
import express, { application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    // which domains are allowed to send requests
    origin: process.env.CORS_ORIGIN,
    // allows to receive and send credentials to the application
    credentials: true,
}
))
//setting limits and access for uploading JSON in the backend
app.use(express.json({limit: "16kb"}));
//setting limitsand access for uploading from URL in the backend
app.use(express.urlencoded({extended: true,limit: "16kb"}));
// setting public folder for uploading publically accesible files in the backend
app.use(express.static("public"))
//setting cookie parser
app.use(cookieParser());


//routes
import userRouter from './routes/user.routes.js'


//routes declarations
app.use("/api/v1/users",userRouter);

// https://localhost:8000/pi/v1/users/register
export {app} 