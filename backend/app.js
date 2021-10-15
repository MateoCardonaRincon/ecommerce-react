var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();

const productsRoutes = require("./routes/products");
const categoriaRoutes = require("./routes/categoria");
const userRoutes = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://dbUser:AeSlz7E0YxzVZgZR@cluster0.wpilz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Estamos conectados");
  });

app.use("/api/products", productsRoutes);
app.use("/api/categoria", categoriaRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
