const User = require("../models").User;
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");

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

module.exports = {
  signup,
  login,
  verify,
};
