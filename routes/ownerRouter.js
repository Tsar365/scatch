const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");


if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find(); //Database থেকে সব owner নিচ্ছে।
    
    if (owners.length > 0) {
      return res.status(503).send("You don't have permission to create a new owner.");
    }

let { fullname, email, password } = req.body;

    let newOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(201).send(newOwner);
  });
}

router.get("/", (req, res) => {
  res.send("hey owner");
});

module.exports = router;