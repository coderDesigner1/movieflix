const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const verifyToken = require("../verifyToken")

//UPDATE
router.put("/:id", verifyToken, async (req, res)=>{
  // if user id in the params match with access token or admin then allowed to update the password
  if(req.user.id === req.params.id || req.user.isAdmin){
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
    }

    // update the user data
    try{
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set:req.body
      },{new:true});

      res.status(200).json(updatedUser)
    }catch(err){
      res.status(500).json(err)
    }
  }else{
    res.status(403).json("You can update your account only!!")
  }
});

//DELETE
router.delete("/:id", verifyToken, async (req, res)=>{
  // if user id in the params match with access token or admin then allowed to update the password
  if(req.user.id === req.params.id || req.user.isAdmin){
    // delete the user data
    try{
      await User.findByIdAndDelete(req.params.id);

      res.status(200).json("User Deleted successfully.")
    }catch(err){
      res.status(500).json(err)
    }
  }else{
    res.status(403).json("You can delete your account only!!")
  }
});


//GET single user
router.get("/find/:id", verifyToken, async (req, res)=>{
  // if user id in the params match with access token or admin then allowed to update the password
  if(req.user.id === req.params.id || req.user.isAdmin){
    // get the user data
    try{
      const user = await User.findById(req.params.id);
      const {password, ...info} = user._doc;
      res.status(200).json(info)
    }catch(err){
      res.status(500).json(err)
    }
  }else{
    res.status(403).json("You can check your account only!!")
  }
});

//GET all users or by query
router.get("/", verifyToken, async (req, res)=>{
  
  const query = req.query.new;

  if(req.user.isAdmin){
    // get all users data
    try{
      const users = query ? await User.find().sort({_id:-1}).limit(2) : await User.find();
      
      res.status(200).json(users)
    }catch(err){
      res.status(500).json(err)
    }
  }else{
    res.status(403).json("You are not allowed to see all users!!")
  }
});

// get user stats.  No. of users created per month/year
router.get("/stats", async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);

  const month =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  try{
    //aggregate the number of ids in the month
    const data = await User.aggregate([
      { $project:{
        month:{$month:"$createdAt"}
      }},
      { $group:{
        _id:"$month",
        total:{$sum:5}
      }}
    ])

    res.status(200).json(data)

  }catch(err){
    res.status(500).json(err)
  }

})


module.exports = router;