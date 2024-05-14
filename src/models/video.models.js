// this file consists of video models
import { Schema } from "mongoose";
import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
// creating data model for video
const videoSchema =new Schema({
    videoFile :{
        type: String, //cloudnary url
        required: true,

    },
    thumbnail:{
        type:String,
        required: true,
    },
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    duration:{
        type: Number, // cloudnary Url
        required: true,
    },
    Views:{
        type:Number, 
        default: 0,
    },
    isPublished:{
        type:Boolean,
        default: true,
    },
    owner:{
        type: Schema.types.ObjectId,
        ref: "User",
    }

},{timestamps: true});
// adding plugin for pagination
videoSchema.plugin(mongooseAggregatePaginate);// used to aggregate paginations
export const Video = mongoose.model("Video",videoSchema);