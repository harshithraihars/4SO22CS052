const express = require("express");
const router = express.Router();
const { ApiHandler } = require("./controller");
router.get("/numbers/:numberid", (req, res) => {
  try {
    const numberid = req.params.numberid;
    ApiHandler(res,numberid);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

module.exports = { router };
