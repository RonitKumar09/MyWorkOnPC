const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res)=>{
    res.send(`<h1>First Node App</h1> <br></br> <a href="/about/Rajat">About</a> <br></br> <a href="/user">List of users</a>`);
})
app.get('/about/:username', (req, res)=>{
    let user = req.params.username;
    res.render("about",{name : user});
})

app.get('/user', (req, res)=>{
    let users = [
        {"name":"Rahul", "age":9090},
        {"name":"Atul", "age":80},
        {"name":"Rajat", "age":800},
        {"name":"Ronit", "age":80},
        {"name":"Random", "age":850}
    ];
    res.render("users",{names : users});
})

app.get('/login', (req,res)=>{
    res.render('login');
})

app.post('/login', (req, res)=>{
    let username = req.body.username;
    let password = req.body.password;
    if(username === "admin" && password === "admin")
    {
        res.render('dashboard');
    }
    else{
        res.end(`<h1>Login error</h1>`);
    }
})

app.listen(8080,()=>{
    console.log("server started on 8080");
});