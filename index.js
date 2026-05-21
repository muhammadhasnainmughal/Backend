require('dotenv').config()

// third party module
const express = require('express')

// core modules
const http = require('http')
const fs = require('fs')

// local module
const add = require('./add.js') 
const userRoutes = require('./routes/user');

// express application
const app = express()
const port = process.env.PORT

// middleware to parse json data in request body
app.use(express.json());
app.set('etag', false);

// for rendering html files
app.set('view engine', 'ejs')

// default routes to render the html files
app.get('/', (req, res) => {
  res.render('home')
})

// make my own routes
app.use('/user', userRoutes)

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

app.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    res.send("Login Success");

});

//create server
// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})