const express = require("express");
const { getEdu, createEdu } = require("../controller/eduControlers");
const router =express.Router();

router.get("/",getEdu)
router.post("/",createEdu)
// router.put("/:id",updateEdu)

module.exports= router