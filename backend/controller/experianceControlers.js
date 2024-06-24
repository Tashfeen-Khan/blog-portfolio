const Experiance = require("../models/experiance");

const getExperiance = async (req, res) => {
    try {
      const edu = await Experiance.find({});
      res.status(200).json(edu);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  const createExperiance = async (req, res) => {
    try {
      const newSelf = await Experiance.create(req.body);
      res.status(200).json(newSelf);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  module.exports = {
    getExperiance,
    createExperiance
  };