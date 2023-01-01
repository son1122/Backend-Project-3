const {where} = require("sequelize");
const MenuItemIngredient = require("../models").MenuItemIngredient;
const MenuItem= require("../models").MenuItem;
const Ingredient = require("../models").Ingredient;
const testDashboard = (req, res) => {
    res.json("test_dashboard")
}
const getMenuDashboard = async (req, res) => {
    console.log("TEST1")
    try {
        await MenuItem.findAll( {
            where:{id:1},
            include: [
                { model: Ingredient,
                    attributes:['name','id','unit'],
                }
            ],
            attributes: ['name','id','img','price']
        })
            .then(fruit => {
                console.log(fruit);
                console.log("TEST")
                res.json(fruit)
            })
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Order not found." });
    }
};
const getMenu= async (req, res) => {
    console.log("TEST1")
    try {
        await MenuItem.findAll( {
            attributes: ['name','id','img','price']
        })
            .then(fruit => {
                console.log("menu get")
                res.json(fruit)
            })
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Order not found." });
    }
};
module.exports = {
getMenuDashboard,
    getMenu


}