const http = require("http");

// Pehle server create karo
const server = http.createServer((req, res) => {
    console.log("Hello");
    res.end("Server is working");
});

// Ab server ko listen karao
server.listen(5000, () => {
    console.log("Server is running on port 5000...");
});
