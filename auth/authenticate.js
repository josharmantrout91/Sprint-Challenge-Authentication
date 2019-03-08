const jwt = require("jsonwebtoken");
const secrets = require("../secrets/secrets");

// quickly see what this file exports
module.exports = {
  authenticate
};

// implementation details
function authenticate(req, res, next) {
  const token = req.get("Authorization");

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json(err);
      } else {
        req.decoded = decoded;
        console.log("decoded token", decoded);
        next();
      }
    });
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on the Authorization Header"
    });
  }
}
