const homeRoutes = require("./home.routes");
const authRoutes = require("./auth/auth.routes");
const userRoutes = require("./user/user.route");
const postRoutes = require("./post/post.route");

const routers = (app) => {
  app.use("/api/v1/", homeRoutes);
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/user/", userRoutes);
  app.use("/api/v1/post", postRoutes);
};

module.exports = routers;
