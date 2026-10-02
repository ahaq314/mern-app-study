const http = require("http");

const server = http.createServer((req, res) => {
  console.log("URL:", req.url, "Method:", req.method);
  res.end("Hello from the server");
});

server.listen(8000, "localhost", () => {
  console.log("Server is running on http://localhost:8000");
});
