var Message = require("../model/message");

module.exports.getAllMessage = async (req, res) => { //noi bang n-1
    let message = await Message.find()
        .populate({ path: "messages", populate: { path: 'userID' } })
        .exec();
    res.json({ message: message[0] });
}

// get all chat room ( idChatRoom (1)) - >  (1) -> get Chat room by id -> messages[ {idUser: '', content: ''}]
module.exports.addMessagge = async (req, res) => {
    let message = new Message(req.body);
    // userID - content - sendAt
    let { userID, chatroomID, content } = req.body;
    let chatroomIDExists = await Message.findOne({ chatroomID })
    if (chatroomIDExists) {
        await Message.findOneAndUpdate({ chatroomID }, {
            $push: {
                messages: {
                    userID,
                    content,
                },
            },
            $set: {
                chatroomID
            }
        })
        res.status(200).json({
            data: message,
            message: "push successfully"
        })
    } else {
        await Message.create({
            chatroomID,
            messages: [
                {
                    userID,
                    content,
                }
            ]
        });
        res.status(200).json({
            data: message,
            message: "save successfully"
        });
    }
}

