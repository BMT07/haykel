const express = require('express')
const isAuth = require('../middlewares/isAuth')
const router = express.Router()
const { sendMessage } = require("../controllers/messageController")
const { allMessages } = require("../controllers/messageController")

router.route('/').post(isAuth(), sendMessage)
router.route('/:chatId').get(isAuth(), allMessages)

module.exports = router;