import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js'
import cookieParser from "cookie-parser"
import {notFound,errorHandler} from "./middleware/errormiddleware.js"


dotenv.config();
//database connection
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('MongoDb is connected');
})
.catch((err)=>{
    console.log(err);
});

//server runnings
const PORT = 5000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use("/alephya/user",userRoutes);


//middleware
app.use(notFound);
app.use(errorHandler);

app.listen (PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
