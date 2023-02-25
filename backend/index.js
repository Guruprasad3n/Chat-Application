const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")
const app = express();
dotenv.config()
const connectDB = require("./config/db")

const PORT = process.env.PORT || 8000
app.use(cors())
const chat = require("./data/data")


app.get("/", (req, res) => {
  res.send("Hello Home");
});

app.get("/api/chat", (req, res)=>{
res.send(chat)
})


app.get("/api/chat/:id", (req, res)=>{
    const id = params.id
    
    res.send("hello Single Chat Welcme")
console.log(params.id)

})









app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
