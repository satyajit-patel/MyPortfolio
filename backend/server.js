const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dataRoute = require("./routes/dataRoute");


const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", dataRoute);
app.use("/ping", (req, res) => {
  res.send("pong");
})
app.use("/", (req, res) => {
  res.send("pong");
})

app.listen(PORT, () => console.log("Server running on port", PORT));
