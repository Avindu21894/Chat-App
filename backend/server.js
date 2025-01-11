import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
dotenv.config(); //This give option to use environmental variable PORT, otherwise server run on port 5000

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Listening on port,${PORT}`);
    connectToMongoDB();
});

app.get('/', function(req, res) {
    res.send("Hello Everyone in the World!");
});

app.use("/api/auth", authRoutes)
