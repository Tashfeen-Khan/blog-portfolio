const Self = require("../models/selfmodel");

const getSelfs = async (req, res) => {
  try {
    const selfs = await Self.find({});
    res.status(200).json(selfs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const createSelf = async (req, res) => {
  try {
    const newSelf = await Self.create(req.body);
    res.status(200).json(newSelf);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
const updateSelf = async (req, res) => {
  try {
    const { id } = req.params;
    const singleSelf = await Self.findByIdAndUpdate(id, req.body);
    if (!singleSelf) {
      return res.status(400).json({ message: "Self is not found" });
    }
    const updatedSelf = await Self.findById(id);
    res.status(200).json(updatedSelf);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSelfs,
  createSelf,
  updateSelf,
};
