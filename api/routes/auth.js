const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

//REGISTER
router.post("/register", async (req, res)=>{
  const newUser = new User({
    username:req.body.username,
    email:req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
  });

  try{
    const user = await newUser.save();
    res.status(201).json(user);
    // const abc = res.json(user)
    // console.log(abc)
    // console.log(CryptoJS.AES.decrypt(abc, "Secret Passphrase"))

  }catch(err){   
    if(err.keyValue.username === req.body.username)
    res.status(500).json("Username already exists")
  }
})

//LOGIN
router.post("/login", async (req, res)=>{
  try{
    const user = await User.findOne({email:req.body.email});
    !user && res.status(401).json("Wrong password or username!")

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8)

    if(originalPassword !== req.body.password)
      res.status(401).json("Wrong password or username!")

    // this destructures the data from the whole document as password and the rest as info 
    // ._doc represents actual document 
    const {password, ...info} = user._doc;

    const accessToken = jwt.sign(
      { id:user._id, isAdmin:user.isAdmin },
      process.env.SECRET_KEY,
      {expiresIn:"5d"}
    )

    // here we are passing only the info to the response and not the password
    res.status(200).json({...info, accessToken})

  }catch(err){
    res.status(500).json(err)
  }
})

module.exports = router