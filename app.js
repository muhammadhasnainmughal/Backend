const express = require('express');

const app = express();


// ======================
// Middleware
// ======================

// JSON data receive karne ke liye
app.use(express.json());

// Form data receive karne ke liye
app.use(express.urlencoded({ extended: true }));

// Etag disable
app.set('etag', false);



// ======================
// Home Route
// ======================

app.get('/', (req, res) => {

    res.send("Welcome to ExpressJS");

});



// ======================
// Route Params Example
// ======================

app.get('/user/:id', (req, res) => {

    const userId = req.params.id;

    res.send(`User ID is: ${userId}`);

});



// ======================
// Query Params Example
// ======================

app.get('/search', (req, res) => {

    const name = req.query.name;
    const age = req.query.age;

    res.send(`Name: ${name}, Age: ${age}`);

});



// ======================
// JSON Response Example
// ======================

app.get('/json', (req, res) => {

    const user = {
        id: 1,
        name: "Ali",
        city: "Karachi"
    };

    res.json(user);

});



// ======================
// Status Code Example
// ======================

app.get('/notfound', (req, res) => {

    res.status(404).send("Page Not Found");

});



// ======================
// Redirect Example
// ======================

app.get('/facebook', (req, res) => {

    res.redirect('/');

});



// ======================
// POST Login Example
// ======================

app.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    res.send(`Email: ${email}, Password: ${password}`);
    res.send("Login Success");

});



// ======================
// POST Register Example
// ======================

app.post('/register', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    // Validation
    if (!name || !email) {

        return res.status(400).json({
            message: "Name and Email required"
        });

    }

    res.status(201).json({
        message: "User Registered Successfully",
        user: {
            name: name,
            email: email
        }
    });

});



// ======================
// PUT Request Example
// ======================

app.put('/update', (req, res) => {

    const name = req.body.name;

    res.send(`User Updated: ${name}`);

});



// ======================
// DELETE Request Example
// ======================

app.delete('/delete/:id', (req, res) => {

    const id = req.params.id;

    res.send(`Deleted User ID: ${id}`);

});



// ======================
// 404 Route
// ======================

app.use((req, res) => {

    res.status(404).send("Route Not Found");

});



// ======================
// Server
// ======================

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Server Running on Port ${PORT}`);

});