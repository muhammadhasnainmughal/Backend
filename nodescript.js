

//GET users
fetch('http://localhost:3000/users')
.then(res => res.json())
.then(data => {
    console.log("GET ALL USERS:");
    console.log(data);
})
.catch(err => console.log(err));

// GET single user
fetch('http://localhost:3000/users/1')
.then(res => res.json())
.then(data => {
    console.log("GET SINGLE USER:");
    console.log(data);
})
.catch(err => console.log(err));

// POST Request (Create User)
fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "Hasnain"
    })
})
.then(res => res.json())
.then(data => {
    console.log("USER CREATED:");
    console.log(data);
})
.catch(err => console.log(err));

// PUT Request (Update User)
fetch('http://localhost:3000/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "Ali Updated from Node Script"
    })
})
.then(res => res.json())
.then(data => {
    console.log("USER UPDATED:");
    console.log(data);
})
.catch(err => console.log(err));

// DELETE Request
fetch('http://localhost:3000/users/1', {
    method: 'DELETE'
})
.then(res => res.json())
.then(data => {
    console.log("USER DELETED:");
    console.log(data);
})
.catch(err => console.log(err));