import express from "express";
import 'dotenv/config';
import cors from "cors";
import connectDB from "./config/mongoDB.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";


const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));




// connect to mongodb
await connectDB();


// routes
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res)=>{
    res.status(200).send({
        message: "Hello from LUMS"
    })
})












// PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));