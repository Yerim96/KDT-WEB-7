const { closeDelimiter } = require("ejs");
const express = require("express");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.get("/", (req, res) => res.render("app"));

const server = app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});

const io = SocketIO(server);
const nickArray = {};

function updateNick() {
  io.emit("updateNick", nickArray);
}

io.on("connection", (socket) => {
  console.log(`server connected >>`, socket.id);
});
