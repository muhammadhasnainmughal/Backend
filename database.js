const mongoose = require('mongoose');

// ==========================================
// STEP 1: Database se Connection
// ==========================================
mongoose.connect('mongodb://localhost:3000/EnterpriseDB')
  .then(() => console.log('Database Connected Successfully 🚀'))
  .catch(err => console.log('Connection Failed', err));

// ==========================================
// STEP 2: Schema & Model (Rulebook banana)
// ==========================================
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Naam lazmi hai
  email: { type: String, required: true, unique: true }, // Email lazmi aur unique ho
  age: { type: Number, min: 18 } // Age kam az kam 18 ho
});

// Model banaya (Yeh database mein 'users' naam ki collection bana dega)
const User = mongoose.model('User', userSchema);

// ==========================================
// STEP 3: Mongoose CRUD Operations (Async/Await)
// ==========================================

// 🟢 CREATE
async function createUser() {
  try {
    const newUser = new User({
      name: "Ali Raza",
      email: "ali@company.com",
      age: 25
    });
    const result = await newUser.save(); // Data database mein save ho gaya
    console.log("User Created:", result);
  } catch (err) {
    console.log("Validation Error:", err.message);
  }
}

// 🔵 READ
async function getUsers() {
  // find() poori list dega. findOne() sirf ek record dega.
  const users = await User.find({ age: { $gt: 20 } }); // Age Greater Than 20
  console.log("Users Found:", users);
}

// 🟠 UPDATE
async function updateUser(userId) {
  // Id se dhoondo aur update karo, {new:true} naya updated data wapas karega
  const result = await User.findByIdAndUpdate(userId, { age: 26 }, { new: true });
  console.log("User Updated:", result);
}

// 🔴 DELETE
async function deleteUser(userId) {
  const result = await User.findByIdAndDelete(userId);
  console.log("User Deleted:", result);
}