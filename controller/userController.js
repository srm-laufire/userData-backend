const user = require('../models').Users;

exports.createUser = async (req, res) => {
    const { name, age, gender } = req.body;

    const result = await user.create({
        name,
        age,
        gender,
    });

    res.json(result);
};