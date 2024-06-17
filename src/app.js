import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js"

const app=express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/users",userRouter);

export default app;