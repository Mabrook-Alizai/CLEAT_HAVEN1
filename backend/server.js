import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import cleatRouter from "./routes/cleatRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// app config
const app = express()
const port = process.env.PORT || 4000; // Use Vercel's dynamic port or default to 4000 if testing locally

// middleware
app.use(cors());

app.use(express.json())

// DataBase Connection
connectDB();

// api endpoint
app.use("/api/cleat", cleatRouter)
app.use("/images",express.static('uploads')) //mounted uploads to /image to load image on chrome
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req,res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});