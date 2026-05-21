const express = require('express');

const app = express();
const port = 3000

app.use(express.json());


let user = [
    {id: 1, name: "hasnain"},
    {id: 2, name: "ali"}
];

//GET
app.get('/show', (req,res) => {

    res.json(user)
    
})

//GET the single user
app.get('/showsingle/:id', (req,res) => {

    const id = req.params.id;

    const getuser = user.find(u => u.id == id);

    if(!getuser)
    {
        return res.send('User not found')
    }

    res.json(getuser)
})

//add user
app.post('/insertuser',(req,res) => {

    const newuser = [
        {id: user.length+1, name: req.body.name}
    ]

    user.push(newuser)

    res.status(201).json({message: "new user created",user : newuser});
});

//PUT user
app.put('/updateuser/:id',(req,res) => {
    
    const id = req.params.id

    const checkuser = user.find(u => u.id == id)

    if(!checkuser)
    {
        return res.status(404).json({message: "User not found"})
    }

    checkuser.name = req.body.name

    res.json({message: "user updated",user: checkuser})
})

//delete user
app.delete('/deleteuser/:id', (req, res) => {

    const id = req.params.id;

    users = users.filter(u => u.id != id);

    res.json({
        message: "User deleted"
    });

});

app.listen(3000, () => {
    console.log(`server running in port ${port}`)
})


//----------------NODE JS direct------------------------

//GET
// const fetch = require('node-fetch');

// fetch('http://localhost:3000/users')
// .then(res => res.json())
// .then(data => {
//     console.log("GET ALL USERS:");
//     console.log(data);
// })
// .catch(err => console.log(err));

//GET single user
// fetch('http://localhost:3000/users/1')
// .then(res => res.json())
// .then(data => {
//     console.log("GET SINGLE USER:");
//     console.log(data);
// })
// .catch(err => console.log(err));

// POST Request (Create User)
// fetch('http://localhost:3000/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: "Hasnain"
//     })
// })
// .then(res => res.json())
// .then(data => {
//     console.log("USER CREATED:");
//     console.log(data);
// })
// .catch(err => console.log(err));

// PUT Request (Update User)
// fetch('http://localhost:3000/users/1', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: "Ali Updated from Node Script"
//     })
// })
// .then(res => res.json())
// .then(data => {
//     console.log("USER UPDATED:");
//     console.log(data);
// })
// .catch(err => console.log(err));

// DELETE Request
// fetch('http://localhost:3000/users/1', {
//     method: 'DELETE'
// })
// .then(res => res.json())
// .then(data => {
//     console.log("USER DELETED:");
//     console.log(data);
// })
// .catch(err => console.log(err));