import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sofiaospinagomez5:sofia123@cluster0.qxyth34.mongodb.net/mern"); 
        console.log(">> DB Connect");
    } catch (error) {
        console.log(error)
    }
}