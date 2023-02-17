const db = require("../config/db");

// all users
export const getUsers = (result) => {
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
export const getUserById = (id, result) => {
    db.query("SELECT * FROM Users WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

export const insertUser = (data, result) => {
    db.query("INSERT INTO Users SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const updateUserById = (data, id, result) => {
    db.query("UPDATE Users SET firstName = ?, age = ? WHERE id = ?", [data.firstName, data.product_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}