let express = require("express");
var bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
const dotenv = require("dotenv");
let apiRouter=require("./app-router");

dotenv.config();

let port = process.env.port;
let dbcon = process.env.cloud_mongodb_con;

let app = new express();

app.use(cors());
app.use(bodyParser.urlencoded({
     extended: true 
    }))
app.use(bodyParser.json());

mongoose.connect(dbcon, { useNewUrlParser: true, useUnifiedTopology: true });

var con = mongoose.connection;

if (!con) {
  console.log("MongoDb'ye Bağlanılamadı");
} 

else {
  console.log("Başarıyla Bağlanıldı.");
}

//! http://localhost/api/ bu istekde çalışacak.
app.use("/api",apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World Test");
});

app.listen(port, () => {
  console.log("Node.js Server Çalışıyor...");
});