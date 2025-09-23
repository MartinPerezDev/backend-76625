import express from "express";
import http from "http";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js";

const app = express();
const server = http.createServer(app);
//io: INPUT OUTPUT
const io = new Server(server);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//endpoints
app.use("/", viewsRouter);

//persistencia en memoria de los mensajes
const messages = [];

//websockets
io.on("connection", (socket)=> {
  //emitimos los mensajes al nuevo usuario que se conecta
  socket.emit("message history", messages);

  //escuchamos un evento
  socket.on("new message", (data)=> {
    messages.push(data);

    //transimitos el nuevo mensaje a todos los clientes
    io.emit("broadcast new message", data);
  });
});

server.listen(8080, ()=> {
  console.log("servidor iniciado correctamente!");
})