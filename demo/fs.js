const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('folder is created')
// })

const filePath = path.join(__dirname, 'test', 'test.txt')

//Writing files
// fs.writeFile(filePath, 'Hello NodeJS!', err => {
//     if (err) {
//         throw err
//     }
//     console.log('File is created!')
// })
//
//
// fs.appendFile(filePath, '\nHello again NodeJS!', err => {
//     if (err) {
//         throw err
//     }
//     console.log('File is created with adding str!')
// })

//Reading files
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    // Basic way:
    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString())
    //More common:
    console.log(content)
})
