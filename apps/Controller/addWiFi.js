const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
  let user = req.query.user;
  let uid = req.query.uid;
  let wifi_user = req.query.wifi_user;
  let wifi_password = req.query.wifi_password;
  let sql_query = `INSERT INTO WIFI (user,uid,WIFI_user,WIFI_password) VALUES(${user},'${uid}','${wifi_user}',${wifi_password})`;
  db.query(sql_query, function (err, result) {
    if (err) {
      console.log(err);
      res.status(404).send("Something went wrong");
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;
