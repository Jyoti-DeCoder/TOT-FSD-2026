import express from "express"
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT||3002;
const app = express();

app.get("/",(req,res)=>{res.status(200).json({message: "Welcome User"})})
app.listen(port,()=>{console.log(`server in running on port ${port}`)})