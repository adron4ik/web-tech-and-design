const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  console.log(`Запит: ${req.method} ${req.url}`);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const filePath = "student.json";

const Data = {
  name: "Студент",
  group: "Група",
  message: "Привіт!"
};

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(Data, null, 2));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/json", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
});

app.post("/update", (req, res) => {
  fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
  res.redirect("/");
});

app.listen(3000, () => console.log("http://localhost:3000"));
