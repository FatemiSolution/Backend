import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { UploadOnCloudinary } from "../utils/Cloundinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
// this is the function to send the response when there is no error while handling the request
const registerUser = asyncHandler(async(req,res)=>{
    // get user details from frontend
    // validation - not empty
    // check if user already exists: user.name and user.email
    // check for images, check for avatar
    // upload them to cloudinary,avatar
    // create user object - create entry in db
    // remove password and refresh token field form response
    // check for user creation 
    // return response

// if data comes from a form or json we can get the data from req.body 

    // get user details from frontend
    const {userName,email,fullName,password} = req.body
    console.log("email: ",email);

     // validation - not empty
    if(
        [userName,email,fullName,password].some((field)=> field?.trim() === "")

    ){
        throw new ApiError(400,"All fields are required")
    }

    // check if user already exists: user.name and user.email
   const existedUser = User.findOne({
        $or:[{userName},{email}]
    })
    // console.log("Existing user: "+existedUser);
    if(existedUser){
        throw new ApiError(409, "User already exists")
    }
   const avatarLocalPath = req.files?.avatar[0]?.path;
   const coverImageLocalPath = req.files?.coverImage[0]?.path;
   if(!avatarLocalPath){
        throw new ApiError(400, "avatar not found")
   }
   const avatar = await UploadOnCloudinary(avatarLocalPath);
   const coverImage = await UploadOnCloudinary(coverImageLocalPath);
   if(!avatar){
        throw new ApiError(400, "avatar not found")
   }
   const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "" ,
    email,
    password,
    userName: userName.tolowercase(),
   })
   const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
   )
   if(createdUser){
    throw new ApiError(500,"something went wrong while registering the user")
   }
   return res.status(201).json(
        new ApiResponse(200,createdUser, "user registered successfully")
   )
})

export {
    registerUser,
}