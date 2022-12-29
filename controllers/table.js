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

const show = (req, res) => {
  Fruit.findByPk(req.params.index)
  .then(fruit =>{
      res.render('show.ejs', { //second param must be an object
          fruit: fruit
      });
  })
  
}



module.exports = {
  getAllTable,
};
