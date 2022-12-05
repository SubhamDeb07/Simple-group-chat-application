const express = require('express')
const router = express.Router()

router.get('/login', (req,res,next)=>{
    res.send(`<html><form onSubmit="localStorage.setItem('username', document.getElementById('username').value)" 
    action="/login" method="POST"><input id="username" type="text" placeholder="username"><br><br>
    <button type="submit">Login</button><form></html>`)
})

router.post('/login', (req,res,next)=>{
 
    res.redirect('/')
})

module.exports = router;