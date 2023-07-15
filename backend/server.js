const express = require('express')
const cors = require('cors')
const nodemailer = require ('nodemailer')
const bodyParser = require('body-parser')
const connectDB= require("./config/connectDB")
require('dotenv').config()

// console.log(process.env.MONGO_URI)

const app = express()
app.use(express.json())
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())


connectDB()
app.use(cors())
app.use("/users", require("./routes/userRoutes"))
app.use("/comments", require("./routes/CommentRoutes"))
app.use("/announcements", require("./routes/announcementRouter"))




app.post("/api/forma", (req, res) =>{
let data = req.body
let smtpTransport= nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth:{
        user: "y.dhaou.youssef@gmail.com",
        pass: "ifseezrngzsaolrk"
    }
});

let mailOptions = {
    from: data.email,
    to: "y.dhaou.youssef@gmail.com",
    subject: `message form ${data.name}`,
   html:`
<h1> Informaions </h1>
<ul>
<li>Name: ${data.name} </li>
<li>email: ${data.email} </li>
</ul>

<h3> Message </h3>
<p>${data.message}</p>
`


  };
smtpTransport.sendMail(mailOptions, (error, res)=>{

    if(error){console.log(error)}
    else{
        console.log("success")
    }
})
smtpTransport.close();


})

const port = 5000;
app.listen(port, () => console.log(`server listening on port ${port}!`))