const express = require("express");
const { connectDB, getUsers, addUser } = require("./db");
require("dotenv")?.config();

const app = express();
const PORT = process.env.PORT;

app.post("/users", getUsers);

app.listen(PORT, async () => {
  connectDB();
  console.log(`App listening at: http://localhost:${PORT}`);
});
