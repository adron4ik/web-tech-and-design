const express = require("express");
const router = express.Router();
const { readData, writeData } = require("../services/fileService");

// GET – всі студенти
router.get("/", (req, res) => {
  const db = readData();
  res.json(db.students);
});

// POST – додати студента
router.post("/", (req, res) => {
  const db = readData();
  const { name, group } = req.body;

  const newStudent = {
    id: Date.now(),
    name,
    group
  };

  db.students.push(newStudent);
  writeData(db);

  res.json(newStudent);
});

// PUT – оновити
router.put("/:id", (req, res) => {
  const db = readData();
  const { id } = req.params;
  const { name, group } = req.body;

  const index = db.students.findIndex(s => s.id == id);

  if (index === -1) return res.status(404).json({ error: "Not found" });

  db.students[index] = { id: Number(id), name, group };
  writeData(db);

  res.json(db.students[index]);
});

// DELETE – видалити
router.delete("/:id", (req, res) => {
  const db = readData();
  const { id } = req.params;

  db.students = db.students.filter(s => s.id != id);
  writeData(db);

  res.json({ message: "Deleted" });
});

module.exports = router;
