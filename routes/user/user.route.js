const router = require("express").Router();
const profilePicUpload = require("../../controllers/user/profilepic");
const verify = require("../../middlewares/authjwt");
const upload = require("../../config/multersetup");

router.post(
  "/update-avatar",
  verify,
  upload.single("profilePic"),
  profilePicUpload
);

module.exports = router;
