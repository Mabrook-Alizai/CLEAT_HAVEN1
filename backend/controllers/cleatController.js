import { log } from "console";
import cleatModel from "../models/cleatModel.js";
import fs from 'fs';
import multer from "multer";

// add cleat item

const addCleat = async (req,res) => {
    
    let image_filename = `${req.file.filename}`;

    const cleat = new cleatModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await cleat.save();
        res.json({success:true,message:"cleat added"})
    } catch(error){
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

// all cleats list
const listCleat = async (req,res) => {
    try {
        const cleats = await cleatModel.find({});
        res.json({success:true, data:cleats})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove cleat item
const removeCleat = async (req,res) => {
    try {
        const cleat = await cleatModel.findById(req.body.id);
        fs.unlink(`uploads/${cleat.image}`,()=>{})

        await cleatModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Cleat removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}
export {addCleat,listCleat,removeCleat}