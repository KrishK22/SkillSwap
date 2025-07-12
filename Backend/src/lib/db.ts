import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONDODB_URI}`)
        console.log(`MondoDB connected : ${connection.connection.host}`)
    } catch (error) {
        console.log(`Something went wrong`)
    }
}