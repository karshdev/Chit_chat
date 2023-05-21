const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const generateToken = require("../config/generateToken")
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, files } = req.body
    
    try {
        const find = await User.findOne({ email }).exec()
        console.log({ find })
        if (find) {
            res.send({ message: "pehle he ha db m" })
        } else {
            console.log({
                name,
                email,
                password,
                files,
            })
            const user = await User.create({
                name,
                email,
                password,
                files
            })
            res.send({user,token:generateToken(user._id)})
        }

    } catch (error) {
        console.log({ error })
        res.send({ message: error.message })
    }
})
const authUser=asyncHandler(async (req,res)=>{
    const { password, email } = req.body

    try {
        const find = await User.findOne({ email }).exec()
        console.log({ find })
        if (find) {
            if (password === find.password) {
                res.send({ message: "Login Successfull", user:find })

            } else {
                res.send({ message: "password didnt match" })
            }
        } else {
            res.send({ message: "No user Found kindly register" })
        }
    } catch (error) {
        console.log({ error })
        res.send({ message: error.message })
    }
})
module.exports = { registerUser,authUser }
