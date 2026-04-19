require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
