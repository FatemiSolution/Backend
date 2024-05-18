import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewear/multer.middlewear.js";

//this is the router where all the user routes will be done
const router = Router();
router.route("/register").post(
    //injecting multer middleware
    upload.fields([
        {
            name:"avatar",
            maxCount:1,
        },
        {
            name:"coverImage",
            maxCount:1,
        },
    ]),
    registerUser
)

export default router