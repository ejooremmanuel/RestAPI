const { User } = require("../../models/User");

const confirmUser = async (req, res) => {
  const { secretToken } = req.body;
  if (!secretToken)
    return res.status(400).json({ message: "Please enter a token." });
};

module.exports = confirmUser;
