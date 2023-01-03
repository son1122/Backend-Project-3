const Tables = require("../models").Table;

const getAllTable = async (req, res) => {
  try {
    await Tables.findAll().then((tables) => {
      res.json(tables);
    });
  } catch {
    res.status(500).send({ message: "Tables not found" });
  }
};

module.exports = {
  getAllTable,
};
