const express = require('express')
const router = express.Router();

const isAuth = require('../middlewares/isAuth')
const { accessChat } = require('../controllers/chatController')
const { fetchChats } = require('../controllers/chatController')

router.route("/").post(isAuth(), accessChat)
router.route("/").get(isAuth(), fetchChats)

module.exports = router;