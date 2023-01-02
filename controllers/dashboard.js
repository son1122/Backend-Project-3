const OrderDetail = require("../models").OrderDetail;
const testDashboard = (req, res) => {
    res.json("test_dashboard")
}
const getDashboard = async (req, res) => {
    try {
        await MenuItem.findAll( {
            // where:{id:1},
            include: [
                { model: Ingredient,
                    // attributes:['name','id','unit'],
                }
            ],
            // attributes: ['name','id','img','price']
        })
            .then(fruit => {
                console.log(fruit);
                console.log("TEST")
                res.json(fruit)
            })
    } catch (err) {
        res.status(500).send({ message: "Order not found." });
    }
};

module.exports = {
    testDashboard,
    getDashboard

}