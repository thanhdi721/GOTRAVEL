const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 3001;
const db = require("./config/db");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
db.connect();

routes(app);

app.listen(port, () => {
  console.log("Server is running on port " + `http://localhost:${port}`);
});
