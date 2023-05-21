const express=require('express')
const {registerUser}=require("../controllers/userControllers")
const {authUser}=require("../controllers/userControllers")
const router=express.Router()
router.post("/",authUser)
router.route("/register").post(registerUser)
module.exports=router