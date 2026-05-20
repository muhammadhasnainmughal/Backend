import 'dotenv/config';
import http from 'http';
import express from 'express';
// import { add } from './lib.js';
// // Types of Modules
// // 1. Core Modules
// // 2. Local Modules/ Custom Modules
// // 3. Third Party Modules
// const lib = require('./lib.js');

//1. Core Modules (fs, http, os, path, etc.)
//3. Third Party Modules (express, mongoose, nodemon, date-fns etc.) Npm Packages


// const path = require('path');
// // console.log(__filename)
// // console.log(__dirname)
// console.log(path.basename(__filename))

// console.log(path.extname('abc.doc'))
// console.log(path.join('abc', 'def', 'ghi'))

// const args = process.argv.slice(2);

// if(args == '--help'){
//     console.log('Usage: node index.js <command>');
//     console.log('Commands:');
//     console.log('  help: Show help');
//     console.log('  version: Show version');
//     console.log('  add: Add two numbers');
//     console.log('  subtract: Subtract two numbers');
//     console.log('  multiply: Multiply two numbers');
//     console.log('  divide: Divide two numbers');
// }else if(args == '--version'){
//     console.log('Version 1.0.0');
// }else{
//     console.log('Invalid command');
// }

// const lib = require('./lib.js');

// const fs = require('fs'); // Core Module

// const express = require('express'); // Third Party Module

// console.log(lib.add(1, 2));

// const path = require('path');

// const htmlFilePath = path.join(__dirname, 'pages','index.html');

// console.log(htmlFilePath);

// console.log(path.resolve('documents','report.pdf'));


// console.log(path.basename(htmlFilePath));

// console.log(path.extname(htmlFilePath));

// console.log(path.dirname(htmlFilePath));

// console.log(path.parse(htmlFilePath));

// console.log(path.format({
//     root: '/',
//     dir: '/Users/khalidhussain/Data/SIBA/EAD/Section-C/learn-nodejs/pages',
//     base: 'index.html',
//     ext: '.html',
//     name: 'index'
//   }));


// const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.hostname());
// console.log(os.networkInterfaces());




// const data = fs.readFileSync('data.txt', 'utf-8');

// console.log(data);


// fs.readFile('data.txt', 'utf-8', (err, data) => {   
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('DATA ===> ',data);
//     }
// });

// console.log('Reading file...');

// fs.appendFile('data.txt', 'Hello, World!', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('File appended successfully');
//     }
// });

// fs.appendFileSync('data.txt', 'Hello, NODEJS!', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('File appended successfully');
//     }
// });


// fs.readFile('data.txt', 'utf-8', (err, data) => {   
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('DATA ===> ',data);
//     }
// });

// console.log('Reading file...');
// console.log(process.env.NODE_ENV);
// console.log(process.env.OPENAI_API_KEY);
// console.log(process.env.DB_URL);






// const server = http.createServer((req, res) => {
//     const categories = [
//         { id: 1, name: 'Electronics' },
//         { id: 2, name: 'Clothing' },
//         { id: 3, name: 'Books' },
//     ]
//     // res.writeHead(404, { 'Content-Type': 'text/html', 'Set-Cookie': 'name=John' });
//     // const user = {
//     //     name: 'John',
//     //     age: 30,
//     //     email: 'john@example.com'
//     // }
//     // res.write(JSON.stringify(user));
//    if(req.method === 'GET' && req.url === '/getCategories'){
    
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.write(JSON.stringify(categories));
//     res.end();
//    }
//    else if(req.method === 'GET' && req.url.startsWith('/getCategories/')){
//     const categoryId = req.url.split('/')[2];
//     const category = categories.find(category => category.id === parseInt(categoryId));
//     if(category){
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(JSON.stringify(category));
//         res.end();
//     }
//     else{
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.write('Category not found');
//         res.end();
//     }
//    }
//    else{
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.write('Page not found');
//     res.end();
//    }
// });

// server.listen(3001, () => {
//     console.log('Server is running on port 3001');
// });


const app = express();

app.use(express.json());
// Express adds ETag by default; matching If-None-Match yields 304 with no body. APIs usually disable it.
app.set('etag', false);
let categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Books' },
]
app.get('/categories', (req, res) => {
    
    res.json(categories);
    // res.send(categories);
});

app.post('/categories', (req, res) => {
    console.log(req.body);
    const newCategory = req.body;
    categories.push(newCategory);
    res.status(201).json(newCategory);
    
});

app.get('/categories/:cid', (req, res) => {
    const categoryId = req.params.cid;
    const category = categories.find(category => category.id === parseInt(categoryId));
    if(category){
        return res.status(200).json(category);
    }
    else{
        res.status(500).send('Category not found');
    }
});
app.delete('/categories/:cid', (req, res) => {
    const categoryId = req.params.cid;
    const category = categories.find(category => category.id === parseInt(categoryId));
    if(category){
        categories = categories.filter(category => category.id !== parseInt(categoryId));
        return res.status(200).send('Category deleted');
    }
    else{
        res.status(500).send('Category not found');
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});