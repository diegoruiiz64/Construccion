const express = require("express");

//const router = Router();
const router = express.Router();
let userController = require("../controllers/userController");
//import { getUsers, login, register, deleteUser, actualizarUser } from "../controllers/userController";

router.get   ("/user", userController.getUsers);
router.post  ("/login", userController.login);
router.post  ("/user", userController.register);
router.delete("/user/:id", userController.deleteUser);
router.put   ("/users/:id", userController.actualizarUser);


module.exports = router;
//export default router;

//const express = require("express");
//const router = express.Router();
//const userController = require("../controllers/userController");