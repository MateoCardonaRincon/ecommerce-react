var express = require("express");
var morgan = require("morgan");
var app = express();

app.set("port", 3002);

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// respond with "hello world" when a GET request is made to the homepage
app.get("/get", (req, res) => {
  res.send({ msg: "Executing a get!" });
});

app.post("/post", (req, res) => {
  console.log(req.body.title);
  res.json({ msg: "Executing a post" });
});

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
