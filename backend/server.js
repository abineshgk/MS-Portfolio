require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { Resend } = require("resend")

const app = express()

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-vercel-domain.vercel.app"
  ],
  methods: ["GET","POST"],
  credentials: true
}))

app.use(express.json())

const resend = new Resend(process.env.RESEND_API_KEY)

app.get("/", (req,res)=>{
  res.send("Backend running")
})

app.post("/contact", async (req,res)=>{

const {name,email,message} = req.body

res.status(200).json({success:true})

try {

await resend.emails.send({
 from: "Portfolio <onboarding@resend.dev>",
 to: process.env.EMAIL_USER,
 subject: "New Portfolio Message",
 text: `Name: ${name}
Email: ${email}
Message: ${message}`
})

} catch(error){

console.log(error)

}

})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})