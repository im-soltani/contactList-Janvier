const express = require("express");
const app = express();
const path = require('path');

const connectDB = require("./config/connectDB");

app.use(express.json());


connectDB();


app.use("/api/uploads", require("./routes/uploadRoute"));

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
app.use("/api/contacts", require("./routes/contact"));


const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.log("erreur") : console.log(`server is running on port ${port}`)
);