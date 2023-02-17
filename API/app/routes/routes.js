module.exports = apk => {
    
    const express = require("express");
    const router = express.Router();
    const db = ("../controllers/Users.js")
    
    const userModel = require("../model/userModel");
    
    // userModel.getAllUsers();
    // userModel.getUserByID();
    // userModel.insertUser();
    // userModel.updateUserByID();
    // userModel.deleteUserByID();
    
    // all users
    router.get('/users', (req, res)=>{
        res.send(db.getUser)
    });
    // single user
    router.get('/users/:id', (req, res)=>{
        res.send(db.getUserByID)
    });
    // new user
    router.post('/users/:id', (req, res)=>{
        res.send(db.insertUser)
    });
    // update user
    router.put('/users/:id', (req, res)=>{
        res.send(db.updateUserByID)
    });
    // delete user
    router.delete('/users/:id', (req, res)=>{
        res.send(db.deleteByID)
    });

}

// module.exports = router;