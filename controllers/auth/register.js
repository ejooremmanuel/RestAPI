const { User } = require("../../models/User");
const bcryptjs = require("bcryptjs");

const createNewUser = async (req, res, next) => {
  try {
    const { email, username, password, gender } = req.body;
    if (!email || !username || !password || !gender) {
      return res.status(400).json({ message: "fields cannot be blank" });
    }
    let newUsername = username.toLowerCase().replace(/ /g, "");
    const user_name = await User.findOne({ username: newUsername });
    if (user_name) {
      return res.status(400).json({ message: "user already exists." });
    }
    const user_email = await User.findOne({ email });
    if (user_email) {
      return res.status(400).json({ message: "email already exists." });
    }
    let hashedPassword = bcryptjs.hashSync(password, 12);
    const newUser = new User({
      username: newUsername,
      email,
      gender,
      password: hashedPassword,
    });
    await newUser.save();
    if (!newUser)
      return res.status(500).json({ message: "An error has occurred." });
    res.status(201).json({ message: "User saved.", user: newUser });
    res.json({ email, username, password });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

module.exports = createNewUser;
