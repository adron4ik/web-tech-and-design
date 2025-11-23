const express = require("express");
const app = express();
const studentsRouter = require("./routes/students");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// REST API
app.use("/api/students", studentsRouter);

// старт сервера
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
