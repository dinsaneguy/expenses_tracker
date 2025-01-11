const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const expenseRoute = require("./routes/expense");
dotenv.config()
const app= express();
// db connection


// middleware
app.use(cors());
app.use(express.json())

// ROUTES
app.use("/expenses",expenseRoute) //it means we can use the address ad .......:Port/expenses

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("connected to db😂😂");
}).catch((err)=>{
    console.log("❌❌❌🍀🍀😶‍🌫️",err);
});

app.listen(process.env.PORT,()=>{
    console.log("server is running on port ",process.env.PORT);
})