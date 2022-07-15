require('dotenv').config();
import movieRoute from "./Routes/movie";
import express,{Express} from "express";
import mongoose from "mongoose";
const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
const app:Express=express();
app.use(express.json());

mongoose.connect(MONGO_URL,()=>{
    console.log('connection to database succesfull..');
    
});

app.use('/movie',movieRoute);
app.listen(3111,()=>{
    console.log("Server listening on PORT 3111");
})
