const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: 3307,
        password: "",
        database: ""
    }
)

app.get("/", (rqs,res) =>
    {
        res.send("Backend fut")
    }
)

app.listen(4444, () =>
    {
        console.log("Backend fut")
    }
)