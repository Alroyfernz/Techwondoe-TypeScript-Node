import {Request,Response} from "express";
import MovieModel from "../Model/Movie"
const newMovie=async(req:Request,res:Response):Promise<void>=>{
try {
   const movie=new MovieModel(req.body);
   const savedMovie= await movie.save();

  res.status(200).json({
message:'New Move has been added to list',
data:savedMovie
   })
} catch (error:any) {
    res.send(404).json({
        message:`Error caused by ${error.message}`
    })
}
}
const removeMovie=async(req:Request,res:Response):Promise<void>=>{
    const {movieId}=req.params;
try {
    await MovieModel.deleteOne({_id:movieId});

    res.status(200).json({
        message:"Movie succesfully removed from list.."
    })
} catch (error) {
    res.status(404).json({
        message:`Error caused due to ${error.message}`
    })
}
}
module.exports={newMovie,removeMovie}