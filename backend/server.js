import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

//This give option to use environmental variable PORT, otherwise server run on port 5000
dotenv.config(); 

// To parse the incoming requests with JSON payloads (from req.body)
app.use(express.json());

app.use("/api/auth", authRoutes);

// app.get('/', function(req, res) {
//     res.send("Hello Everyone in the World!");
// });

app.listen(PORT, () => {
  console.log(`Listening on port,${PORT}`);
  connectToMongoDB();
});
