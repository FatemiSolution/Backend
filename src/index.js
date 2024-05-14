import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
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
.catch((error)=>{
    console.log("Mongo db connection failed !!!", error)
})

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
