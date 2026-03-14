require("dotenv").config()
const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/contact", async (req,res)=>{

const {name,email,message} = req.body

const transporter = nodemailer.createTransport({
 service:"gmail",
 auth:{
  user:process.env.EMAIL_USER,
  pass:process.env.EMAIL_PASS
 }
})

await transporter.sendMail({
 from: email,
 to:"abineshgk2005@gmail.com",
 subject:"New Portfolio Message",
 text:`Name: ${name}
Email: ${email}
Message: ${message}`
})

res.send("Message Sent")

})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})