const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());


const users = [
    {id: 1, name: "sabana", email: "sabana@gmail.com" },
    {id: 2, name: "Bobita", email: "bobota@gmail.com" }
]

app.get('/', (req, res) =>{
    res.send("user management server is Running");
})

app.get('/users', (req, res) =>{
    res.send(users);
})

app.post('/users' , (req, res) =>{
    console.log('hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port , () =>{
    console.log( `server is running on ${port}`);
})