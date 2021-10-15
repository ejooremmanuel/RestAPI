const router = require("express").Router();
const createPost = require("../../controllers/post/createPost");

router.post("/create", createPost);

module.exports = router;
