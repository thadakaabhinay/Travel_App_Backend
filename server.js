const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");

dotenv.config();

const categoryDataAddedToDBRouter=require("./routes/categoryimport.router");
const hotelDataAddedToDBRouter=require("./routes/dataimport.router");




const hotelRouter=require("./routes/hotel.router");
const categoryRouter=require("./routes/category.router");
const singleHotelRouter=require("./routes/singlehotel.router");
const authRouter=require("./routes/auth.router");
const wishlistRouter=require("./routes/wishlist.router");

const mongoose=require("mongoose");
const connectDB=require("./config/dbconfig");

const app=express();
app.use(cors())
app.use(express.json());
connectDB();

const PORT=3500;

app.get("/",(req,res)=>{
    res.send("Hello World, I Am Abhinay");
})

app.use("/api/hoteldata",hotelDataAddedToDBRouter);
app.use("/api/categorydata",categoryDataAddedToDBRouter);
app.use("/api/hotels",hotelRouter);
app.use("/api/category",categoryRouter);
app.use("/api/hotels",singleHotelRouter);
app.use("/api/auth",authRouter);
app.use("/api/wishlist",wishlistRouter);

mongoose.connection.once("open",()=>{
    console.log("connected to DB");
    app.listen(process.env.PORT || PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
})

