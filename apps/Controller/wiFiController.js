const express = require("express");
const router = express.router();

router.post("/", (req, res) => {
  let uid = req.query.uid;
  db.query(`SELECT * FROM history WHERE uid =?`, [uid], function (err, result) {
    if (err) {
      res.status(404).send("Something went wrong");
    } else {
      if (result.length) {
        res.status(200).send(result);
      } else {
        res.status(404).send("No Data Found");
      }
    }
  });
});

module.exports = router;
