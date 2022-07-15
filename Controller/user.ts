

import UserModel from "../Model/User";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const PRIVATE_KEY = process.env.PRIVATE_KEY;


export const userLogin = async (req: Request, res: Response) :Promise<Response<any, Record<string, any>>|undefined>=> {

  const { email, password } = req.body;
  try {
    const user:any = await UserModel.findOne({ Email: email });
    if (!user) {
      return res.status(500).json({
        messgae: `No user with email ${email} exists.`,
      });
    }
    if (user.Password!=password)
      return res.status(500).json({
        messgae: `you have entered an invalid password.`,
      });
    const token = jwt.sign({ email: user.email }, PRIVATE_KEY as string);
    return res.status(200).json({
      message: "User Login succesfull",
      token,
      data: user,
    });
  } catch (error:any) {
    return res.status(500).json({
        message:`Error caused due to ${error.message}`
    })
  }
};


export const userInfo= async (req: Request, res: Response) :Promise<Response<any, Record<string, any>>|undefined>=> {
    const {userId}=req.params;
    try {
        const userData=await UserModel.findById(userId).populate("MovieList");
        return res.status(200).json({
            message:"User Data fetched succesfully",
data:userData
        })
    } catch (error:any) {
        return res.status(500).json({
            message:`Error caused due to ${error.message}`
        })
      }
}
export const userRegister=async(req: Request, res: Response):Promise<Response<any, Record<string, any>>|undefined>=>{
try {
    const user= new UserModel(req.body);
    await user.save();
    return res.status(200).json("user saved succ.")
} catch (error) {
    
}
}
