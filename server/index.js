const express = require("express");
const cors = require("cors");
const Defaultdata = require("./default.js");
const Route = require("./routes/route.js");

const app = express();

// middlewares
app.use(cors());

// routes
app.use("/", Route);

// port
const PORT = process.env.PORT || 8000;

// mongodb connection
require("./database/dbconnection.js");

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT ${PORT}`);
})

Defaultdata();
