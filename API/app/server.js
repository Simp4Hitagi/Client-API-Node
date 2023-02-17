const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const Router = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())


app.use(Router);

app.listen(4269, ()=> console.log("Server is running at http://localhost:4269"));
