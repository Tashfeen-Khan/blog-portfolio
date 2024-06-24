const Edu =require("../models/edumodel")
const getEdu = async (req, res) => {
    try {
      const edu = await Edu.find({});
      res.status(200).json(edu);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  const createEdu = async (req, res) => {
    try {
      const newSelf = await Edu.create(req.body);
      res.status(200).json(newSelf);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  module.exports = {
    getEdu,
    createEdu 
  };
  