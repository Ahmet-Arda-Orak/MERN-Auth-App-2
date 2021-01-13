const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.port || 5001
const session = require("express-session");
const router = require("./routers/user.router");

 //connectDB
const connectDB = require("./model/connectDB");
connectDB();

//Middle Wares
app.use(bodyParser.json());
app.use(
    session({
        secret:"This is Secret",
        resave: false,
        saveUninitialized: true,
        cookie: {secure:false}
    })
)

app.use("/auth",router);

//listen
app.listen(port,()=>{
    console.log(`Hello from port : ${port}`)
})