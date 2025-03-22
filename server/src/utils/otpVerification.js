import ejs from "ejs";
import nodemailer from "nodemailer";
import { fileURLToPath} from "url";
import {dirname} from "path";
const currentFilePath = import.meta.url;
const currentDirectory =dirname(fileURLToPath(currentFilePath));

import dotenv from "dotenv";
dotenv.config();

//create new user otp verification
//console.log(currentDirectory);
//mail config
const mail = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:process.env.NODEMAILER_USER,
        pass:process.env.NODEMAILER_PWD, 
    },
});

async function sendOTPLink(email,token,name,otp){
  try {
    const renderedcontent = await ejs.renderFile(`${currentDirectory}/../template/otp_verify.ejs`,
        {token,name,otp}
    );
   
    const mailOptions = {
        from: process.env.NODEMAILER_USER,
        to: email,
        subject : "OTP Link",
        html:renderedcontent,
    };

    const verificationInfo = await mail.sendMail(mailOptions);
    return verificationInfo;
  } catch (error) {
    console.log(error);
    return {error};
  }
}

export {sendOTPLink};
