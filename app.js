require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

// routes
app.use("/user", require("./src/routes/userRouter"));

/* app.use("/", (req, res, next) => {
    res.json({ msg: "hello " });
}); */

/* app.listen(3000, () => {
    console.log(`Successfully served on port: http://localhost:3000.`);
});*/

// conect to mongo db
const URI = process.env.MONGODB_URL;
mongoose.connect(
    URI,
    {
        //useCreateIndex: true,
        //useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) throw err;
        console.log("Connected to mongodb");
    }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Successfully served on port: ${PORT}.`);
});
