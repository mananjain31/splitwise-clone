const express = require("express");
const { UserDao } = require("./dao/UserDao");
const { connectDB } = require("./db/index");
require("dotenv")?.config();
const userDao = new UserDao();
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  connectDB();
  // userDao.addUser({
  //   name: "Manan",
  //   contactNumber: "7000784085",
  //   email: "mananjain31jan@gmail.com",
  //   password: "abcd",
  // });
  console.log(await userDao.getUsers());
  console.log(`App listening at: http://localhost:${PORT}`);
});
