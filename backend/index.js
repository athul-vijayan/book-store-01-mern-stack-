import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import booksRouter  from "./routers/bookrouter.js";


const app = express();
app.use(express.json());
app.use(cors())

// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods: ['GET','PUT','POST','DELETE'],
//         allowedHeaders:['Content-Type']
//     })
// )

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("i am from expresss server");
});

app.use("/books", booksRouter);

app.listen(PORT, () => {
    console.log("app started on port", PORT);
  });

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("connected to mongodb");
    
  })
  .catch((error) => console.error());
