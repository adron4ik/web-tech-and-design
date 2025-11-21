<<<<<<< HEAD
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


=======
const fs = require('fs')

fs.readFile('file.txt', 'utf8',  (err, data) => {
    const addToStr = '\nFFFFFFFFFFFFF'
    if (err) throw err
    fs.writeFile(
        'result.txt',
        data + addToStr,
        (err => {
            if(err) throw err
            console.log('file have been created')
        })
    )
}) 
>>>>>>> 27096e1f5b4ff212cfafa13bda851c0eb087466c
