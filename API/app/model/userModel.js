const db = require("../config/db");

// all users
const getUsers = (result) => {
    db.query("SELECT * FROM Users", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// single user
const getUserById = (id, result) => {
    db.query("SELECT * FROM Users WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

const insertUser = (data, result) => {
    db.query("INSERT INTO Users SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

const updateUserById = (data, id, result) => {
    db.query("UPDATE Users SET firstName = ?, age = ? WHERE id = ?", [data.firstName, data.age, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

const deleteUserById = (id, result) => {
    db.query("DELETE FROM Users WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}