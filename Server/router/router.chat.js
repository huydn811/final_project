const express = require("express");
const chatController = require("../controller/chatroom.controller");
const MessageController = require("../controller/message.controller");
const router = express.Router();

router.get("/get-all-chatroom", chatController.getAllRoom);
router.get("/get-chatroom/:id", chatController.getChatRoomByID);
router.post("/create-chatroom", chatController.createChatRoom);

router.get("/get-all-message", MessageController.getAllMessage);
router.post("/add-message", MessageController.addMessagge);

module.exports = router;