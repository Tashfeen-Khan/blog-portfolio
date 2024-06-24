const Work = require("../models/workmodel");

const getWork = async (req, res) => {
    try {
      const selfs = await Work.find({});
      res.status(200).json(selfs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  
  const createWork = async (req, res) => {
    try {
      const newSelf = await  Work.create(req.body);
      res.status(200).json(newSelf);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  module.exports = {
    getWork,
    createWork
  };
  