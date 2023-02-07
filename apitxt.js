const http = require("http");
const fs = require("fs");


const hostname = "127.0.0.1";

const port = 3000;

// fs.readFile("employee.json", "utf8");
// fs.appendFile();

const getdata = (data) =>{
   const b = new Buffer.from(data, "utf-8").toString();
  fs.writeFile("employee.json", b, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("data entered successfully");
    }
  });

  };

const postdata = (data) =>{
  const b = new Buffer.from(data, "utf-8").toString();
 fs.writeFile("employee.json", b, function (err) {
   if (err) {
     console.log(err);
   } else {
     console.log("data entered successfully");
   }
 });
};

const pushdata = (data) => console.log(data);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  console.log(req.method, "-->");

  if (req.method === "GET") {
    res.end("get method");
    req.on("data", gatdata);
    return;

  }
  if (req.method === "POST") {
    res.end("post method ");
    req.on("data",postdata)
    return;
  }
  if (req.method === "PUT") {
    res.end("put method ");
    req.on("data", pushdata);
    return;
  }
  if (req.method === "DELETE") {
    res.end("delete method ");
    return;
  }

  res.end("hello world");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
