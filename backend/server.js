require("dotenv").config()
const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/contact", async (req,res)=>{

try {

const {name,email,message} = req.body

const transporter = nodemailer.createTransport({
 host: "smtp.gmail.com",
 port: 587,
 secure: false,
 auth: {
   user: process.env.EMAIL_USER,
   pass: process.env.EMAIL_PASS
 }
})

await transporter.sendMail({
 from: email,
 to:process.env.EMAIL_USER,
 subject:"New Portfolio Message",
 text:`Name: ${name}
Email: ${email}
Message: ${message}`
})

res.status(200).json({success:true})

} catch(error){

console.log(error)

res.status(500).json({success:false})

}

})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})