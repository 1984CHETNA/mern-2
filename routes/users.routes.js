const router= require("express").Router();


const { getAllUsers, searchUsersByQuery, getUsersById} = require("../controllers/users.controller")




router.get("/", getAllUsers)

router.get("/search",searchUsersByQuery);
router.get("/:uuid" , getUsersById);

module.exports = router;

