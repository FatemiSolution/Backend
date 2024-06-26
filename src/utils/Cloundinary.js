// this file is used to save the file from disk to cloudinary 
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUNDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUNDINARY_API_KEY, 
        api_secret: process.env.CLOUNDINARY_API_SECRET,
    });
//function for dealing with cloudinary
    const UploadOnCloudinary = async (localFilePath)=>{
        try {
            if (!localFilePath) return null;
            //Upload the file on the cloudinary
            const response = await cloudinary.uploader.upload(localFilePath,{
                resource_type: 'auto'
            })
            // file has been uploaded successfully
            console.log("File is uploaded on cloudinary",response)
            fs.unlinkSync(localFilePath)
            return response
        } catch (error) {
            fs.unlinkSync(localFilePath) // remove the temporary file as the upload operation got failed
            return null;
        }
    }
    export {UploadOnCloudinary}
