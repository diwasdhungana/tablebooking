var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Day = require("../models/day").model;
const Reservation = require("../models/reservation").model;

// Parameters:
// {
//   "date": String ("Dec 02 2019 06:00"),
//   "table": table id,
// 	"name": String,
// 	"phone": String,
// 	"email": String
// }

router.get("/", function (req, res, next) {
  const date = new Date().toString().split(" ").slice(1, 4).join(" ");
  console.log("this is date", date);
  Day.find({ date }, (err, days) => {
    if (!err) {
      console.log("this is days", days);
      if (days.length > 0) {
        let day = days[0];
        const reservedTables = day.tables.filter(
          (table) => table.isAvailable === false
        );
        res.status(200).send(reservedTables);
      } else {
        console.log("no reservation for today.");
      }
    }
  });
});

module.exports = router;
