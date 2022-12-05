const fs = require('fs')
const express = require('express')
const router = express.Router()


router.get('/', (req,res,next)=>{
    fs.readFile('username.txt',  (err, data)=>{
        if(err){
            console.log(err)
            data = 'No chat exist'
        }
        res.send(`${data}<html><form action="/"  onSubmit="document.getElementById('username').value = localStorage.getItem('username')"  method="POST">
        <input id="msg" name="msg" type="text">
        <input  id="username" name="username"<br><br>
        <button type="send">Send</button><form></html>`)
    })
     
   })

 router.post('/', (req,res,next)=>{
fs.writeFile('username.txt', `${req.body.username}: ${req.body.msg}`, {flag: 'a'}, (err)=>{
    console.log(err)
    res.redirect('/')
} )
 })


module.exports = router;