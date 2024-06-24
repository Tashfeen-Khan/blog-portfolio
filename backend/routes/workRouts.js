const express = require("express");
const { getWork, createWork } = require("../controller/workControlers");
const router =express.Router();

router.get("/", getWork)
router.post("/",createWork)

module.exports= router