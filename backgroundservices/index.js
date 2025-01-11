const express = require("express");
const cron = require("node-cron");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();


dotenv.config();



mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("\n\n\t\tDB CONNECTION SUCCESSFUL😂😂😂\t\n")
}).catch((err)=>{
    console.log("Following error occured❌❌ ",err);
});

i=0;
const schedule = () =>{
    // run task every second
    cron.schedule('* * * * * *', () => {
        i++;
        console.log('running a task every second ',i);
      });
}

schedule();

app.listen(process.env.PORT,()=>{
    console.log("\n\n\t\tSERVER IS RUNNING ON PORT  "+process.env.PORT+"\t\n")
})

