const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Database connection successfull");
}).catch((err) => {
    console.log(err);
})


