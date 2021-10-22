const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

let users = [];

router.get('/users',(req,res)=>{
    res.json(users);
})
router.post('/users',(req,res)=>{
    users.push(req.body);
    res.json(req.body);
})

router.put('/users/:id',(req,res)=>{
    let userIndex = users.findIndex((user)=> user.id ===parseInt(req.params.id));
    if(userIndex === -1){
        return res.json({
            error: 'the given id was not found '
        })
    }
    users[userIndex]['id'] =req.body.id;
    users[userIndex]['name'] =req.body.name;
    users[userIndex]['email'] =req.body.email;
    users[userIndex]['address'] =req.body.address;
    res.json(req.body);
})

module.exports = router;