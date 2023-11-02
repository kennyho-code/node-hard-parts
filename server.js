const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log("request url", req.url);
//   res.end("Hello World");
// });

const server = http.createServer();

server.listen(3000, () => {
  console.log("Server is running on port 3000: http://localhost:3000");
});

server.on("request", (request, response) => {
  console.error("request url", request.url);
  throw new Error("error");
  response.end("Hello World");
});

server.on("clientError", (error) => {
  console.log("clientError", error);
});
