const User = require("../models").Customer;
const Order = require("../models").Order;
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { MenuItem, Ingredient } = require("../models");
const { decode } = require("jsonwebtoken");

const signup = (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).json(err);

    bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
      if (err) return res.status(500).json(err);
      req.body.password = hashedPwd;
      User.create(req.body)
        .then((newUser) => {
          const token = jwt.sign(
            {
              username: newUser.username,
              id: newUser.id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30 days",
            }
          );

          // res.cookie("jwt", token)
          res.status(200).json({ status: "signUp" });
        })
        .catch((err) => {
          res.send(`error ${err}`);
        });
    });
  });
};

const login = (req, res) => {
  try {
    User.findOne({
      where: {
        username: req.body.username,
      },
    })
      .then((foundUser) => {
        if (foundUser) {
          bcrypt.compare(
            req.body.password,
            foundUser.password,
            (err, match) => {
              if (match) {
                const token = jwt.sign(
                  {
                    username: foundUser.username,
                    id: foundUser.id,
                  },
                  process.env.JWT_SECRET,
                  {
                    expiresIn: "30 days",
                  }
                );

                res.cookie("jwt", token);
                res.json(token);
              } else {
                return res.sendStatus(400);
              }
            }
          );
        } else {
          return res.sendStatus(400);
        }
      })
      .catch((e) => {
        return res.sendStatus(500);
      });
  } catch (e) {
    return res.sendStatus(500);
  }
};
const verify = (req, res) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
  }
  jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err || !decodedUser) {
      return res.status(401).json({ status: "Unauthorized Request" });
    } else {
      return res.status(200).json({ status: "authorized Request" });
    }
  });
};
const test = (req, res) => {
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
    User.findOne({ where: { username: decodedUser.username } }).then((resu) => {
      res.json({
        username: resu.username,
        email: resu.email,
        phone: resu.phone,
        firstname: resu.firstname,
        lastname: resu.lastname,
      });
    });
  });
};
const edit = (req, res) => {
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
    return res.json("ok");
  });
  if (req.body.password !== "") {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(500);

      bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
        if (err) return res.status(500);
        User.update(
          {
            username: req.body.username,
            password: hashedPwd,
            email: req.body.email,
            phone: req.body.phone,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
          },
          {
            where: { username: req.user.username },
          }
        ).then((r) => {});
      });
    });
  } else {
    User.update(
      {
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      },
      {
        where: { username: req.user.username },
      }
    ).then((r) => {});
  }
};
const data = (req, response) => {
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

    try {
      Order.findAll({
        where: { customer_id: decodedUser.id },
        include: [
          {
            model: MenuItem,
            // attributes:['name','id','unit'],
          },
        ],
        //  limit: 20,
        order: [["id", "ASC"]],
        attributes: ["id"],
      }).then((res) => {
        response.json(res);
      });
    } catch (err) {
      response.status(500).send({ message: "Order not found." });
    }
  });
};
const dataId = (req, response) => {
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

    try {
      Order.findByPk(req.params.id, {
        where: { customer_id: decodedUser.id },
        include: [
          { model: MenuItem, attributes: ["name", "id", "price", "img"] },
        ],
        attributes: ["id"],
      }).then((res) => {
        response.json(res);
      });
    } catch (err) {
      res.status(500).send({ message: "Order not found." });
    }
  });
};
const menu = async (req, response) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
  }

  jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err || !decodedUser)
      return response.status(401).json({error: "Unauthorized Request"})
    
    try {
       MenuItem.findAll({
        attributes: ["name"],
      }).then((res) => {
        response.json(res);
      });
    } catch (err) {
      res.status(500).send({message: "menu found."});
    }
  })
};
const deleteUser = async (req, res) => {
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
    User.destroy({ where: { id: decodedUser.id } });
  });
};
module.exports = {
  signup,
  login,
  verify,
  test,
  edit,
  data,
  dataId,
  menu,
  deleteUser,
};
