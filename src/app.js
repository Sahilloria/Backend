import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app=express();
app.use(express.json({limit:"16kb"}));  // to send JSON data and can use limit using express configuration
app.use(express.urlencoded({extended:true, limit:"16kb"})) // help to decode the urls like using %20 in the url
app.use(express.static("public"));
app.use(cookieParser())

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

export default app;