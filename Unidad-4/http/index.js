import http from "http";

const server = http.createServer( (req, res) => {

  res.setHeader("Content-Type", "text/plain");

  if( req.url === "/users" && req.method === "GET" ){
    res.end("Lista de usuarios");
  }else{
    res.end("hola mundo!")
  }

});

server.listen( 8080, () => {
  console.log("Servidor iniciado correctamente!");
});