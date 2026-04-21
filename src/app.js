const express = require('express');
const app = express();  //instance of an express js application

app.use("/test", (req,res) => {                    //request handler
    res.send('Hello from the server!');   
});

app.use("/", (req,res) => {                    //request handler
    res.send('Namaste Liki!');   
});

app.use("/hello", (req,res) => {                    //request handler
    res.send('Hello Hello Hello!');   
});

app.use("/bye", (req,res) => {                    //request handler
    res.send('Bye Bye Bye!');   
});

//we have to listen on some port to start the server
app.listen(7777, () => {
    console.log('Server is successfully running on port 3000');
});