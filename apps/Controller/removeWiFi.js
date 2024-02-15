const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
  let uid = req.query.uid;
  db.query(
    `DELETE FROM WIFI WHERE uid = '${uid}'`,
    [uid],
    function (err, result) {
      if (err) {
        res.status(404).send("Something went wrong");
      } else {
        res.status(200).send(result);
      }
    }
  );
});

module.exports = router;
