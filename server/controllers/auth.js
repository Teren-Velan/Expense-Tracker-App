const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email })
    // call back funtion means , it either gets back an error or your user that you looking for , so create a if statement for handling both cases
    .exec((error, user) => {
      //check if user is registered, if registered:
      if (user)
        return res.status(400).json({
          message: "User already registered",
        });
      // destructuring the req.body
      const { firstName, lastName, email, password } = req.body;
      // if user not registered then we need to register user
      // create new instance of the user
      const _user = new User({
        firstName,
        lastName,
        email,
        password,
      });

      // save the new instance of user to db
      _user.save((error, data) => {
        if (error) {
          console.log(error);
          return res.status(400).json({
            message: "Something unexpected has happened",
          });
        }

        if (data) {
          const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET, {
            expiresIn: "365d",
          });

          const { _id, firstName, lastName, email, fullname } = data;

          res.status(200).json({
            token,
            data: {
              _id,
              firstName,
              lastName,
              email,
              fullname,
            },
          });
        }
      });
    });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) return res.status(400).json({ error });
    if (user) {
      if (user.authenticate(req.body.password)) {
        // at this stage we verified that user is authenticated , so we will issue him a token for user to send with every request to authenticate that its still him
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "365d",
        });
        const { _id, firstName, lastName, email, fullname } = user;
        return res.json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            fullname,
          },
        });
      } else {
        return res.status(400).json({
          message: "Invalid password",
        });
      }
    } else {
      return res.status(400).json({ message: "Something unexpected happened" });
    }
  });
};

exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } else {
    return res.status(400).json({ message: "Authorization required" });
  }
  next();
  //jwt.decode()
};
