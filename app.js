const logger = require ('./logger');
const fs = require('fs');
const os = require('os');
const path = require('path');
const eventEmitter = require('events');


// fs.writeFile('file.txt', 'Erfan Abbasi \n MyFile', (err) =>{
//     if(err){
//         console.log(err);
//     }
// });

// fs.readFile('file.txt', (err,data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.platform());


// let thisProjectPath = path.join(__dirname,'app.js');
// console.log(thisProjectPath);
// let ProjectPath = path.join(__dirname,'../app.js');
// console.log(ProjectPath);


let obj = new eventEmitter();
obj.on('message',(eventArgs)=>{
    console.log(eventArgs.message)
})

obj.emit('message',{message:'Hello'});
