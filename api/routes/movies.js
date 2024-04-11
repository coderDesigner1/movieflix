const router = require("express").Router()
const Movie = require('../models/Movie')
const verifyToken = require('../verifyToken')

//Create a new movie
router.post("/", verifyToken, async (req, res) =>{
  if(req.user.isAdmin){
    const movie = new Movie(req.body);

    try{
      const newMovie = await movie.save();
      res.status(201).json(newMovie)

    }catch(err){
      console.log(err)
      res.status(500).json(err)
    }
  }else{
    res.status(500).json("You are not allowed!")
  }
});

module.exports = router