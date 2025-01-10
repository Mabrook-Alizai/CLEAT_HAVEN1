import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mabrook:lalaaaa@cluster0.ieyu0.mongodb.net/cleat-haven').then(()=>console.log("DB connected"))
}