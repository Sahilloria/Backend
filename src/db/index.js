import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const dataBaseConnection = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Database is successfully connected ${(connection.connections)}`)
    } catch (error){
        console.log("Database in not connected",error)
    }
};

export default dataBaseConnection;


