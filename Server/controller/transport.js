const Transport = require("../model/transport");


module.exports.getAllTransport = (req, res) => {
    Transport.find()
    .then((transport) => {
        res.json(transport)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
};

module.exports.addTransport = (req, res) => {
    let transport = new Transport ({
        transportID : req.body.transportID,
        nameTransport : req.body.nameTransport
    });
    transport.save()
    .then((transport) => {
        res.json(transport)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
};

module.exports.getTransportID = (req, res) => {
    let transportID = req.params.transportID;
    Transport.findOne({_id : transportID})
    .then((transport) => {
        res.json(transport)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
};

module.exports.updateTransport = (req, res) => {
    let transportID = req.params.transportID;
    let updateTransport = {
        transportID : req.body.transportID,
        nameTransport : req.body.nameTransport
    }
    Transport.findByIdAndUpdate({_id : transportID}, {$set : updateTransport})
    .then((transport) => {
        res.json(transport)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
};

module.exports.deleteTransport = (req, res) => {
    let transportID = req.params.transportID;
    Transport.findByIdAndDelete({_id : transportID})
    .then((transport) => {
        res.json(transport)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}