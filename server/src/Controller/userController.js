import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import {sendOTPLink} from "../utils/otpVerification.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generatetoken.js";


export const createUser = async(req,res,next)=>{
    const {name,email,password} = req.body;
    //console.log(name,email,password);
     
    //validation
    if(!name || !email || !password){
        res.status(400)
        const err= new Error("Please provide all fields");
        return next(err);
    }
    if(password.length<8){
        res.status(400)
        const err = new Error("Password must be atleast 8 character")
        return next(err)
    }
    const emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(!emailregex.test(email)){
        res.status(400)
        const err = new Error("Invalid email address")
        return next(err)
    }

    try {
       const userExists = await User.findOne({email});
       if(userExists){
        res.status(400);
        const err = new Error("Email is already registered...please use different email");
        return next(err);
       }
       //hash texhnique

       //Generate OTP
       const otp = Math.floor(Math.random()*1000000);

       //new User
       const user = {name,email,password};

       //Create signed activation token
       const token = jwt.sign({user,otp},process.env.ACTIVATION_SECRET,{
         expiresIn:"5m",
       });

        //send mail
        const verificationEmailResponse = await sendOTPLink(
            email,
            token,
            user.name,
            otp
         );
        if(verificationEmailResponse.error){
            const err = new Error( "Failed to send OTP ,please try later");
            res.statusCode=500;
            return next (err);
        }
        res.status(200).json({message:" OTP sent,please check your email"});


    } catch (error) {
        if(error.code === 11000){
            res.status(400);
            const err = new Error("Email is already registered...please use a different email address")
            return next(err);
        }
        res.status(500).json({error : error.message} || "Internal server error");
    }
    
}

//verify OTP

export const verifyUser = async(req,res,next)=>{
    try {
        const {token}= req.params;
        const {otp} = req.body;
        const verify = jwt.verify(token,process.env.ACTIVATION_SECRET);

        if(!verify){
           res.status(400)
           const err = new Error("OTP Expired");
           return next(err);
        }

        if(verify.otp != otp){
            res.status(400)
            const err = new Error("Wrong OTP");
            return next(err);
        }else{
            //database save
            const user = await User.create({
                name:verify.user.name,
                email:verify.user.email,
                password:verify.user.password,
            });

            //Generate Token
            if(user){
                console.log("response"+res);
                generateToken(res,user._id);
                res.status(201).json({
                    id:user._id,
                    name:user.name,
                    email:user.email,
                    message:"New User Created Successfully",
                })
            }
        }
    } catch (error) {
       res.status(500).json({error:error.message} || "Internal server error"); 
    }
}