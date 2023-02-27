const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const generateToken = require("./config/generateToken");

const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const chat = require("./data/data");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

app.get("/", (req, res) => {
  res.send("Hello Home");
});

// --------------------------------------

app.use("/api/user", userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});

// app.get("/api/chat", (req, res)=>{
//   res.send(chat)
//   })

//   app.get("/api/chat/:id", (req, res)=>{
//       const id = params.id

//       res.send("hello Single Chat Welcme")
//   console.log(params.id)

//   })
