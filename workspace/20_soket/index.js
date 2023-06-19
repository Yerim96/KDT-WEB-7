const express = require("express");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8000;
//템플릿
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.get("/", (req, res) => res.render("app"));
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
const io = SocketIO(server);
const nickArray = {};
//유저 목록 업데이트
function updateNick() {
  io.emit("updateNick", nickArray);
}
io.on("connection", (socket) => {
  console.log(`server Connected >>`, socket.id);

  socket.on("setNick", (data, room) => {
    socket.join(room);
    console.log(`nick>>${data}`);
    if (Object.values(nickArray).indexOf(data) != -1) {
      socket.emit("error", "이미 존재하는 닉네임");
    } else {
      nickArray[socket.id] = data;
      io.to(room).emit("notice", `${data}님이 입장하셨습니다.`);
      socket.emit("entryFinish", data);
      updateNick();
    }
  });
});
