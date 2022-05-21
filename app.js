//Содержимое директории
const fs = require('fs');
const path = require('path');
const dir = './';
fs.readdir(dir, (err, data) => {
    console.log(data)
    console.log(path.extname(data[1]))// type file
    // data.forEach(file => {
    //     fs.readFile('file','utf-8', (err, data) => {
    //              console.log(data);
    //          })
    // })
   
})
//Чтение файла
fs.readFile('abc.txt','utf-8', (err, data) =>{
    console.log(data);
})
