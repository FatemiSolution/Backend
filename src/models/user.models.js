// this file consists of user models
import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// creating data model for user
const userSchema = new Schema({
    userName: {
        typeof: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true, //helps in searching

    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    fullName:{
        type: String,
        required: true,
        trim: true,
        index: true, //helps in searching
    },
    avatar:{
        type: String, //cloudinary url
        required: true,
    },
    coverImage:{
        type: String,
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref:'Video',
        }
    ],
    password:{
        type: String,
        required: [true, "Password is required"]

    },
    refreshToken:{
        type: String,
    }

},{timestamps: true});
// pre modifier which will encrypt the password when it is modified
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
    this.password = bcrypt.hash(this.password,10);
    next();
    }
});
// method for checking the password
userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password,this.password)
}
// creating access token function
userSchema.methods.generateAccessToken =  function(){
   return jwt.sign({
        _id: this._id,
        email: this.email,
        userName:this.userName,
        fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
// creating Refresh token function
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
export const User = mongoose.model('User',userSchema);