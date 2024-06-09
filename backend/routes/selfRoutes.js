const express = require("express");
const { getSelfs, createSelf,updateSelf } = require("../controller/authorControlers");
const router =express.Router();

router.get("/",getSelfs)
router.post("/",createSelf)
router.put("/:id",updateSelf)

module.exports= router