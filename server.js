const http = require("http");
const app = require("./app");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

//Create server
const server = http.createServer(app);
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("database connection established.");
  })
  .catch(({ message }) => console.log(message, "connection failed."));

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
