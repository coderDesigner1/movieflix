const jwt = require("jsonwebtoken")

function verifyToken(req, res, next){
  const token = req.headers.token;

  if(token){
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
      if(err) res.status(403).json("Invalid Token !!")
      req.user = user;
      next();
    })
  }else{
    return res.status(401).json("You are not authenticated!!")
  }

  
}

module.exports = verifyToken