import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
       const connection= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log("Connected Successfully")

    } catch (err) {
        console.log("MONDODB connection FAILED", err);
        process.exit(1)
    }

};
export default connectDB;