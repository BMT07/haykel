const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const connectDB = require("./config/connectDB")
require('dotenv').config()
const chatRoute = require("./routes/chatRoute")
const messageRoute = require("./routes/messageRoute")

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
app.use("/api/chat", chatRoute)
app.use('/api/message', messageRoute)




var http = require('http');
var server = http.createServer(app);

var io = require('socket.io')(server, {
    pingTimeOut: 60000,
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on('connection', function (socket) {
    console.log('connected to socket.io');
    socket.on('setup', (userData) => {
        socket.join(userData.id);
        socket.emit("connected");
    });
    socket.on('join chat', (room) => {
        socket.join(room);
        console.log("user joined room" + room);
    });

    socket.on('typing', (room) => socket.in(room).emit("typing"));
    socket.on('stop typing', (room) => socket.in(room).emit("stop typing"));


    socket.on('new message', (newMessageReceived) => {
        var chat = newMessageReceived.chat;
        if (!chat.user) return console.log("chat.users not defined");
        chat.user.forEach(user => {
            if (user._id == newMessageReceived.sender._id) return;

            socket.in(user._id).emit("message received", newMessageReceived);

        })
    });
    socket.off("setup", () => {
        console.log("user disconnected");
        socket.leave(userData.id);
    })
});




app.post("/api/forma", (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        auth: {
            user: "mhadhbihaykel0@gmail.com",
            pass: "mumwhdrtticixolz"
        }
    });

    let mailOptions = {
        from: data.email,
        to: "mhadhbihaykel0@gmail.com",
        subject: `message form ${data.name}`,
        html: `
<h1> Informaions </h1>
<ul>
<li>Name: ${data.name} </li>
<li>email: ${data.email} </li>
</ul>

<h3> Message </h3>
<p>${data.message}</p>
`


    };
    smtpTransport.sendMail(mailOptions, (error, res) => {

        if (error) { console.log(error) }
        else {
            console.log("success")
        }
    })
    smtpTransport.close();


})

const port = 5000;
app.listen(port, () => console.log(`server listening on port ${port}!`))