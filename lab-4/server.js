const express = require('express')
const fs = require('fs')
const PORT = 3000;
const app = express()
const dataOfStudent = {
  name: "Василь",
  group: "КН-31",
  message: "Я вчуся працювати з Node.js!"
}
const filePath = "./student.json"
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(dataOfStudent, null, 2), "utf-8");
}

app.get('/', (req, res) => {
    res.send('hi route /')
})
app.get('/about', (req, res) => {
    res.send('hi route /about')
})
app.get('/student', (req, res) => {
  res.json(dataOfStudent)
})
app.get('/student/html', (req, res) => {
  const htmlMark = `
  <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Імя: ${dataOfStudent.name}</p>
    <p>Група: ${dataOfStudent.group}</p>
    <p>Message: ${dataOfStudent.message}</p>
</body>
</html>
`
res.send(htmlMark)
})


app.listen(PORT, () => {
    console.log(`srp: http://localhost:${PORT}`)
})