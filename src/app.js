const express = require('express');
const app = express();  //instance of an express js application

// app.use("/user", (req,res) => {                    //request handler
//     res.send({firstName: "Likhita", lastName:"Govindaraj"});   
// });

app.get("/user", (req,res, next) => {                    //request handler
    //get query params in request handler
    console.log(req.query);
    console.log("Handling the first route handler!");
    //res.send({firstName: "Likhita", lastName:"Govindaraj"});   
    next();
},
 (req,res, next) => {                    //request handler
    //get query params in request handler
    console.log("Handling the second route handler!");
    //res.send("Route handler 2!");   
    next();
},
 (req,res, next) => {                    //request handler
    //get query params in request handler
    console.log("Handling the third route handler!");
    //res.send("Route handler 3!");   
    next();
},
 (req,res, next) => {                    //request handler
    //get query params in request handler
    console.log("Handling the fourth route handler!");
    //res.send("Route handler 4!");   
    next();
},
 (req,res, next) => {                    //request handler
    //get query params in request handler
    console.log("Handling the 5th route handler!");
    res.send("Route handler 5!");   
    // next();
} 
);

app.post("/user", (req,res) => {                    //request handler
    res.send("Data successfully stored to DB");   
});

app.delete("/user", (req,res) => {                    //request handler
    res.send("Data deleted from DB successfully");   
});

// app.use("/test", (req,res) => {                    //request handler
//     res.send('Hello from the server!');   
// });

// app.use("/hello", (req,res) => {                    //request handler
//     res.send('Hello Hello Hello!');   
// });

// app.use("/bye", (req,res) => {                    //request handler
//     res.send('Bye Bye Bye!');   
// });

// app.use("/", (req,res) => {                    //request handler
//     res.send('Namaste Liki!');   
// });
//we have to listen on some port to start the server
app.listen(8080, () => {
    console.log('Server is successfully running on port 8080');
});