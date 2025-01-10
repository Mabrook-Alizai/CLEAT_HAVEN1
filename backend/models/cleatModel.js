import mongoose from "mongoose";

const cleatSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true}
})

const cleatModel = mongoose.models.cleat || mongoose.model("cleat", cleatSchema);

export default cleatModel;