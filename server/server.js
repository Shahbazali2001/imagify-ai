import express from "express";;
import 'dotenv/config';
import cors from "cors";
import connectDB from "./config/mongoDB.js";




const PORT = process.env.PORT || 4000;
// import { Configuration, OpenAIApi } from "openai";


const app = express();
app.use(express.json());
app.use(cors());

await connectDB();

app.get("/", (req, res)=>{
    res.status(200).send({
        message: "Hello from codex"
    })
})













app.listen(PORT, () => console.log(`Server running on port ${PORT}`));