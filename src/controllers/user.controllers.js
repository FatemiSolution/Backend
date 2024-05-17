import { asyncHandler } from "../utils/asyncHandler.js";
// this is the function to send the response when there is no error while handling the request
const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({
        message: "FatemiSolution",
    });
})

export {
    registerUser,
}