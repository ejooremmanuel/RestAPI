const jwt = require("jsonwebtoken").verify;

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["access-token"];
    if (!token) {
      return res.status(403).json({
        message: "You need to be logged in to perform this action.",
      });
    }

    jwt(token, process.env.JWT_SECRET, (err, { findUser }) => {
      if (err) {
        return res
          .status(401)
          .json({ message: "You are not authorized. Token is invalid." });
      }
      req.user = findUser;
      next();
    });
  } catch {
    ({ message }) => {
      res.status(500).json({ message });
    };
  }
};

module.exports = verifyToken;
