const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  const anyText = '\nНепарний варіант — додано студентом Греділь Адріан'
  if (err) throw err;
    fs.writeFile(
        'result.txt',
        data + anyText,
        (err) => {
            if (err) throw err;
        console.log('Файл створено!');
    });
});


