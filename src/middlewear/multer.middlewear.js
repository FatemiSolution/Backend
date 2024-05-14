import multer from "multer";
// this file is used to save the file in the diskstorage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
    
      cb(null, file.originalname)
    }
  })
  
 export const upload = multer({ 
   storage,
 })