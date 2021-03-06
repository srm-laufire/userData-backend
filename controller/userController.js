const user = require('../models').Users;
const { Op } = require('sequelize');

exports.createUser = async (req, res) => {
    const { name, age, gender } = req.body;

    const result = await user.create({
        name,
        age,
        gender,
    });

    res.json(result);
};

exports.allUsers = async (req, res) => {
    const users = await user.findAll({})
    
    res.json(users);
};

exports.removeUser = async (req, res) => {
    const result = await user.destroy({
        where: {
            id: {
                [Op.eq]: req.params.id,
            }
        }
    });

    res.json(result);
}