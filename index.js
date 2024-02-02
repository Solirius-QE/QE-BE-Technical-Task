import "dotenv/config";
import express from "express";
const app = express();
import dbConnect from "./db.js";
import route from "./routes/productRoute.js";
dbConnect();
app.use(express.json());
app.use("/api", route);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is up and running! at localhost:${process.env.PORT}`);
});

export default server;
