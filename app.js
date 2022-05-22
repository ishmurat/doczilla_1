//Содержимое директории
const fs = require('fs');
const path = require('path');
let dir = './';
//  fs.readdir(dir, (err, data) => {
//       console.log(data)
//      console.log(path.extname(data[1]))// type file
//  })


fs.readdir(dir, (err, data) => {
     // console.log(data);
      const doubles = data.map((num) =>
            fs.readFile(dir + num, 'utf-8', (err, data) => {
                  if (path.extname(num) == '.txt') {
                        console.log(data)
                  };
            })
      );

})



// let file = 'abc.txt';

//  fs.readFile( file,'utf-8', (err, data) =>{
//   console.log(data);
//  })




//Чтение файла
// fs.readFile('abc.txt','utf-8', (err, data) =>{
//     console.log(data);
// })
