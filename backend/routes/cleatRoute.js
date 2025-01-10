import express from "express"
import { addCleat, listCleat, removeCleat } from "../controllers/cleatController.js"
import multer from "multer"

const cleatRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

cleatRouter.post("/add",upload.single("image"),addCleat); // here if i add addCleat function then postman doesn't send request, and terminal shows error as filename undefined i.e in cleatController.js
                                                // if i use only upload code works but doesn't upload to desired folder i.e uploads

cleatRouter.get("/list",listCleat)
cleatRouter.post("/remove",removeCleat)

export default cleatRouter;