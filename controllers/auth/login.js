const { User } = require("../../models/User");
const bcryptjs = require("bcryptjs");
const { compare } = bcryptjs;
const jwt = require("jsonwebtoken");

const loginUser = async (req, res, next) => {
  try {
    const { userInput, password } = req.body;
    if (!userInput || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    let findUser = await User.findOne({
      $or: [{ username: userInput }, { email: userInput }],
    });
    if (!findUser) {
      return res.status(404).json({ message: "Invalid login credential" });
    }
    if (!findUser.confirmed) {
      return res.status(401).json({ message: "Please verify your email." });
    }

    let passwordMatch = await compare(password, findUser.password);
    if (!passwordMatch) {
      return res.status(403).json({ message: "Wrong Password." });
    }
    const token = jwt.sign({ findUser }, process.env.JWT_SECRET, {
      expiresIn: "365d",
    });

    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        ...findUser._doc,
        password: "",
      },
    });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

module.exports = loginUser;
