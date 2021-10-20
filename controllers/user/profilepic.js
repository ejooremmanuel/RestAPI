const { User } = require("../../models/User");
const cloudinary = require("cloudinary").v2;
const cloudinarySetup = require("../../config/cloudinarysetup");

const dpUpload = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "image field required!" });
  }
  let foundUser = await User.findById(req.user._id);
  await cloudinarySetup();
  const uploadedImage = await cloudinary.uploader.upload(req.file.path);
  console.log(uploadedImage.secure_url);
  foundUser.avatar = uploadedImage.secure_url;
  await foundUser.save();
  return res.status(201).json({ message: "profile image set." });
};

module.exports = dpUpload;
