require('dotenv').config()
// third party module
const express = require('express')
const http = require('http')
const fs = require('fs')
// local module
const add = require('./add.js') 

// express application
const app = express()
const port = process.env.PORT

// default routes
app.get('/', (req, res) => {
  res.send('HOME PAGE')
})

// make my own routes
app.get('/login', (req, res) => {
  res.send('<h1>LOGIN PAGE</h1>')
})

app.get('/signup', (req, res) => {
  res.send('<h1>SIGNUP PAGE</h1>')
})

app.get('/profile', (req, res) => {
  res.send('<h1>PROFILE PAGE</h1>')
})

app.get('/logout', (req, res) => {
  res.send('<h1>LOGOUT PAGE</h1>')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/contact', (req, res) => {
  res.send('Contact page')
})

app.get('/add', (req, res) => {
  const result = add(2, 2)
  res.send(`Result of addition: ${result}`)
})

app.get('/readfile', (req, res) => {
  fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    res.send('Error reading file');
    return;
  }
  res.send(`File contents: ${data}`);
});
})

app.get('/writefile', (req, res) => {
  fs.appendFile('data.txt', '\nHello, World!', (err) => {
    if(err) {
        console.log(err);
    } else {
        res.send('File appended successfully');
    }
});
})

app.get('/deletefile', (req, res) => {
  fs.unlink('data.txt', (err) => {
    if (err) {
      res.send('Error deleting file');
      return;
    }
    res.send('File deleted successfully');
  });
})

app.get('/makefolder', (req, res) => {
  fs.mkdir('newfolder', (err) => {
    if (err) {
      res.send('Error creating folder');
      return;
    }
    res.send('Folder created successfully');
  });
});

app.get('/deletefolder', (req, res) => {
  fs.rmdir('newfolder', (err) => {
    if (err) {
      res.send('Error deleting folder');
      return;
    }
    res.send('Folder deleted successfully');
  });
});

//create server
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})