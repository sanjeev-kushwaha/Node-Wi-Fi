const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
  let uid = req.query.uid;
  db.query(`SELECT * FROM WIFI WHERE uid =?`, [uid], function (err, result) {
    if (err) {
      res.status(404).send("Something went wrong");
    } else {
      if (result.length) {
        res.status(200).send(result[0].wifi_user);
      } else {
        res.status(404).send("No Data Found");
      }
    }
  });
});

module.exports = router;
