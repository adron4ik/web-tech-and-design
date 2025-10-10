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