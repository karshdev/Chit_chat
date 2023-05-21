const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require("dotenv")
const app = express()
const userRoutes=require("./routes/userRoutes")
dotenv.config()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const { chats } = require("./data/data")
app.get("/", (req, res) => {
    res.send("API is running")
})
app.use('/api/user', userRoutes)
const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
})
    .then(() => {
        console.log("Connected to db")
        app.listen(PORT, () => {
            console.log(`Node API started at port ${PORT}`)
        })
    }).catch((error) => {
        console.log(error)
    })
