require("dotenv").config();
//imported express library
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser").json();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const routes = require("./routes");

//middleware-every request goes through it
app.use(cors());
app.use(bodyParser);
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
  }

  jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err || !decodedUser)
      return res.status(401).json({ error: "Unauthorized Request" });

    req.user = decodedUser;

    next();
  });
};

//Case sensitives recheck with React components if one of the link is not working
// app.use("/order",verifyToken, routes.order);
app.use("/order", verifyToken, routes.order);
app.use("/table", verifyToken, routes.table);
app.use("/menu_items", verifyToken, routes.menuitems);
app.use("/orderdetail", verifyToken, routes.orderdetail);
app.use("/dashboard", verifyToken, routes.dashboard);
app.use("/auth", verifyToken, routes.auth);
app.use("/api", verifyToken, routes.api);
app.use("/customer", verifyToken, routes.customer);
//app will run on port
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
