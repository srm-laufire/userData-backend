const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.route('/').post(userController.createUser).get(userController.allUsers);
router.route('/:id').delete(userController.removeUser);

module.exports = router;