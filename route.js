const express = require("express");
const router = express.Router();

router.get("/numbers/:numberid", (req, res) => {
  const numberid = req.params.numberid;
  
//   if(numberid=='e'){
//       console.log("e");
//   }else if(numberid=='p'){
//       console.log("p");

//   }
//   else if(numberid=='r'){
//       console.log("r");

//   }
//   else if(numberid=='f'){
//       console.log("f");

//   }
  switch (numberid) {
    case "p":
      console.log("p");

      break;
    case "f":
      console.log("f");

      break;
    case "e":
      console.log("e");

      break;
    case "r":
      console.log("r");

      break;
  }
  return res.json("");
});

module.exports = { router };
