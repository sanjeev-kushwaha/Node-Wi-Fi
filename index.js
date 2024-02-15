const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

global.db = require("./apps/Database/database");

const url = "/api/";

app.use(url + "activityHistory", require("./apps/Controller/activityHistory"));
app.use(url + "addWiFi", require("./apps/Controller/addWiFi"));
app.use(url + "addWiFi", require("./apps/Controller/addWiFi"));
app.use(url + "currentWiFi", require("./apps/Controller/currentWiFi"));
app.use(url + "updateWiFi", require("./apps/Controller/updateWiFi"));
app.use(url + "removeWiFi", require("./apps/Controller/removeWiFi"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
