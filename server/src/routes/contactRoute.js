import express from "express";
import { contactData } from "../controllers/contact.controller.js";
const router=express.Router()

router.post("/",contactData)

export default router