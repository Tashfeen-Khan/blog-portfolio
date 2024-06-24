const express = require("express");
const { getExperiance, createExperiance } = require("../controller/experianceControlers");
const router =express.Router();

router.get("/",getExperiance)
router.post("/",createExperiance)
// router.put("/:id",updateEdu)

module.exports= router