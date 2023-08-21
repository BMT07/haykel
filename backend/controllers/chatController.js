const User = require('../models/User')
const Chat = require('../models/chatModel')
const asyncHandler = require('express-async-handler')


const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        console.log("user id  param not sent with request");
        return res.sendStatus(400);
    }

    const isChat = await Chat.find({
        $and: [
            { user: { $elemMatch: { $eq: req.user._id } } },
            { user: { $elemMatch: { $eq: userId } } },
        ]
    })
        .populate("users", "-password")
        .populate("latestMessage")
        .populate({
            path: "latestMessage.sender",
            select: "fullName email"
        });

    if (isChat.length !== 0) {
        res.send(isChat[0]);
    } else {
        const chatData = {
            chatName: "sender",
            users: [req.user._id, userId],
        };
        try {
            const createdChat = await Chat.create(chatData);
            const FullChat = await Chat.findOne({ _id: createdChat._id })
                .populate("users", "-password")
            res.status(200).send(FullChat);
        } catch (error) {
            console.log(error.message);
        }
    }
});


const fetchChats = asyncHandler(async (req, res) => {
    try {
        Chat.find({ user: { $elemMatch: { $eq: req.user._id } } }).populate("users", "-password").populate("latestMessage").sort({ updatedAt: -1 }).then(async (result) => {
            result = await User.populate(result, {
                path: "latestMessage.sender",
                select: "fullName email"
            });


            res.status(200).send(result)
        })

    } catch (error) {
        console.log(error.message)
    }
})


module.exports = { accessChat, fetchChats }