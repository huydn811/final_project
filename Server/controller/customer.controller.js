const Customer = require("../model/customer");

module.exports.getCustomer  = async (req, res) => {
    await Customer.find()
    .then((customer) => {
        res.status(200);
        res.json({
            customer,
            message : "get customer success !"
        })
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}

module.exports.createCustomer = async (req, res) => {
    let customer = new Customer(req.body);
    customer.save()
    .then((customer) => {
        res.status(200);
        res.json({
            customer,
            message : "create customer success !"
        })
    })
    .catch((err) => {
        res.status(400).send(err);
    })
}