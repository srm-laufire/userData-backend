const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.route('/').post(userController.createUser).get(userController.allUsers);

module.exports = router;