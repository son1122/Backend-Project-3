// const express = require("express"); //from documentation: express is function
// const app = express(); //app is an object
//
//
//
// app.listen(3009, () => {
//   console.log("I am listening");
// });

require("dotenv").config();
//imported express library
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser").json();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express(); //returns an object
const routes = require("./routes");

//middleware- every request goes through it
app.use(cors());
app.use(bodyParser);
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const verifyToken = (req, res, next) => {
  // let token = req.cookies.jwt
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
  }

  console.log(req.token);

  jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err || !decodedUser)
      return res.status(401).json({ error: "Unauthorized Request" });

    req.user = decodedUser;
    console.log(decodedUser);

    next();
  });
};

// app.use('/order', verifyToken, routes.order)`;
// app.use('/table', verifyToken, routes.table);
// app.use('/dashboard', verifyToken, routes.dashboard`);
app.use("/order", routes.order);
app.use("/menu_items", routes.menuitems);
app.use("/table", routes.table);
app.use("/dashboard", routes.dashboard);
app.use("/login", routes.auth);
app.use("/signup", routes.auth);

//app will run on port
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
