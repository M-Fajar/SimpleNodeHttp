const http = require("http");
const fs = require("fs");

const onReqHTML = (req, res) => {
  res.writeHead(200, { "Conent-Type": "text/html" });

  fs.readFile("./index.html", null, (err, result) => {
    if (err) {
      res.writeHead(404);
      res.write("File Not Found");
    }
    res.end(result);
  });
};

function onReqJSON(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  const data = {
    nama: "Muhammad Fajar Santoso",
    statut: "Belum Menikah",
  };

  res.end(JSON.stringify(data));
}
const PORT = 3001;
console.log(`Server is running in PORT ${PORT}`);
http.createServer(onReqJSON).listen(PORT);
