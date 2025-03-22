import express from "express";
import { createUser,verifyUser } from "../Controller/userController.js";



const router= express.Router();

router.post("/",createUser);
router.post("/registerverifyotp/:token",verifyUser);

export default router;