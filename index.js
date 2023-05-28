const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: "sabana", email: "sabana@gmail.com" },
    {id: 2, name: "Bobita", email: "bobota@gmail.com" },
    {id: 3, name: "Taina", email: "taina@gmail.com" },
    {id: 4, name: "dhoni", email: "dhoni@gmail.com" }
]

app.get('/', (req, res) =>{
    res.send("user management server is Running");
})

app.get('/users', (req, res) =>{
    res.send(users);
})

app.listen(port , () =>{
    console.log( `server is running on ${port}`);
})