
// This file is used to establish a connection to the MongoDB database and start the server to listen for incoming requests on a specified port. It also handles any errors that may occur during the connection process.
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: './.env'
})
// function for coonecting DB 
connectDB()
.then(()=>{

    app.on("error",(error)=>{
        console.log("Error: " + error);
        throw error;
    })
/**
 * Starts the server and listens for incoming requests on the specified port.
 * If the PORT environment variable is set, it will listen on that port. 
 * Otherwise, it will listen on port 8000.
 */
app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running at port : ${process.env.PORT}`);
})
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});








//  this is the basic method of connecting DB using IIFE


// const app = express();
// // always use try catch or promises while using databases 
// // data is always in other continent always use async await

// /**
//  * Immediately invoked async function expression.
//  * 
//  * @async
//  * @function
//  * @returns {Promise<void>} A Promise that resolves to undefined.
//  */
// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("Error: " + error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error);
//         throw error;
//     }
// })();
