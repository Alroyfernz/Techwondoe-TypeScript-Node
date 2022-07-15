require('dotenv').config();

declare var process : {
    env: {
      MONGO_URL: string,
      PORT:number,
      
    }
  }
import movieRoute from "./Routes/movie";
import userRoute from "./Routes/user"
import express,{Express} from "express";
import mongoose from "mongoose";

const PORT:number=process.env.PORT;
const MONGO_URL:string=process.env.MONGO_URL;
const app:Express=express();
app.use(express.json());

mongoose.connect(MONGO_URL,()=>{
    console.log('connection to database succesfull..');
    
});

app.use('/movie',movieRoute);
app.use('/user',userRoute);

app.listen(3111,()=>{
    console.log("Server listening on PORT 3111");
})
