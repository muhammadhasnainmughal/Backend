const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.send('<h1>LOGIN PAGE</h1>')
})

module.exports = router;