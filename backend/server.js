const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is running..");
});

app.get("/api/notes", (req, res) => {
    res.send(notes);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`server is running on PORT ${PORT}`))