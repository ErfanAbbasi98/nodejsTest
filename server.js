// const http = require('http');

// http.createServer((req,res)=> {
//     if(req.url === '/'){
//         res.write('Welcome to home');
//         res.end();
//     }
//     else if(req.url === '/workinnet'){
//         res.write('Win');
//         res.end();
//     }

// }).listen(3000);



const express =require('express');
const hbs = require('hbs');
const path = require('path');
const fs = require('fs');


const app = express();
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname,'public')));

// app.use((req, res, next) =>{
//     let now = new Date().toString();
//     let log = `${now} : ${req.method} ${req.url}`;
    
//     console.log(log);
//     fs.appendFile('server.log', log + '\n' , (err) =>{
//         if(err){
//             console.log('Unable to  append to server.log');
//         }
//     });
//     next();
// });

// app.use((req,res,next) => {
// res.render('tamir.hbs');
// });


hbs.registerPartials(path.join(__dirname,'views/partials'));
hbs.registerHelper('date', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('uppercase',  (text) =>{
    return text.toUpperCase();
})

app.get('/',(req,res) =>{
    // res.send('welcome to my website');
    res.render('home',{
        pageTitle: 'صفحه اصلی',
        win : 'Workinnet.ir',
    });
})
app.listen('3000',() =>{
    console.log('server in running on port 3000');
});

app.get('/api/sayHello',(req,res) =>{
    res.send('hello dear user');

});


