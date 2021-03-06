const express = require("express");
const app = express();
const path = require("path");
const routeHandler = require("./routes");
const morgan = require("morgan");
const mongoose = require("mongoose");
const config = require("./config/mongo");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

// set up db connection
mongoose.connect(config.mongodb.dsn, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/robots.txt", (req, res) => {
  res.status(204);
});

app.use("/", routeHandler());

app.listen(PORT, () => console.log("Listening on port: " + PORT));
