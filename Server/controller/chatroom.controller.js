var ChatRoom = require("../model/chatroom");

module.exports.getAllRoom = async (req,res) => {
    let room = await ChatRoom.find()
    .populate({path : "userID"})
        .exec();
    if (!room) {
        res.status(200).json({
            payload: false,
            message : "room is not exists"
        })
    }
    res.json(room);
}

module.exports.getChatRoomByID = async (req, res) => {4
    let userID = req.params.id;
    const room = await ChatRoom.findOne({ userID: userID })
        .populate({ path: "userID" });
    if (!room) {
        res.status(200).json({})
    }
    res.status(200).json(room);
    
}
module.exports.createChatRoom = async (req, res) => {
    try {
        const {
            userID
        } = req.body;
        const findUser = await User.findById(userID);

        if (findUser.chatRoomID !== null) {
            return res.status(400).json({
                error: "",
                message: "chat room is exists"
            })
        }
        const chatRoom = await ChatRoom.create(req.body);
        await User.findByIdAndUpdate(userID, {
            $set: {
                chatRoomID: chatRoom._id
            }
        })
        res.status(200).json({
            data: chatRoom,
            message: "add chat room successfully"
        })
    } catch (error) {
        console.log(error, '[error]');
        res.status(400).json({
            error
        })
    }

}