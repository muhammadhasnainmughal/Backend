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


