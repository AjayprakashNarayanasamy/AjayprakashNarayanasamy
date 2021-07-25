
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const axios = require("axios");
const logger = require("./middleware/logger");

const weatherRouter = require("./routes/weather");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(logger);


app.use("/weather", weatherRouter);
app.use("/users", usersRoute);
app.use("/posts", postsRoute);

app.listen(3000);