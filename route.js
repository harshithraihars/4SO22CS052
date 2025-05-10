const express = require("express");
const router = express.Router();
const {ApiHandler}=require("./controller")
router.get("/numbers/:numberid", (req, res) => {
  const numberid = req.params.numberid;
  switch (numberid) {
    case "p":
      ApiHandler("p")
      break;
    case "f":
      ApiHandler("f")
      break;
    case "e":
      ApiHandler("e")
      break;
    case "r":
      console.log("r");
      break;
  }
  return res.json("");
});

module.exports = { router };
