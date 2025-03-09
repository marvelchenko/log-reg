//Our Depencies

const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

//Lets run the server
app.listen(3003, () => {
    console.log('Server is running on port 3003')
})

//let us create our database (mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'userdb',
})

//let us now create a route to the server
// that will register a user

app.post('/register', (req, res) => {
    //We need to get variable sent from the form
    const sentFullName = req.body.FullName
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    //lets create SQL statement to insert the user
    // to the database table users

    const SQL = 'INSERT INTO newdb (fullname, email, username, password) VALUES (?,?,?,?)'
    //We are going to enter these values through a variable

    const Values = 
        [sentFullName,
        sentEmail,
        sentUserName,
        sentPassword]

    //Query to execute the sql statement stated aboe
    db.query(SQL, Values, (err, results) =>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({message: 'User added!'})
        }
    })
})

// Login section

app.post('/login', (req, res) => {
    const sentloginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword

    //lets create SQL statement to insert the user
    // to the database table users

    const SQL = 'SELECT * FROM newdb WHERE username = ? && password = ?'
    //We are going to enter these values through a variable

    const Values = 
        [sentloginUserName, sentLoginPassword]
    
        db.query(SQL, Values, (err, results) =>{
            if(err){
                res.send({error: err})
            }
            if(results.length > 0){
                res.send(results)
            }
            else{
                res.send({message: `Credential Don't Match!`})
            }
        })

})