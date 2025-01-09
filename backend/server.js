import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config(); //This give option to use environmental variable PORT, otherwise server run on port 5000

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`listening on port ${PORT}` ));

app.get('/', function(req, res) {
    res.send("Hello Everyone in the World!");
});