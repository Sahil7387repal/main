const express=require('express');
const users=require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  Check= require('../miiddleware/authmiddle');
const router=require('express').Router();


router.get("/all",async (req, res) => {
  try {
      const datas = await users.find({});
      console.log(datas);
      res.json(datas);

  } catch (error) {
      res.json({ messege: error });
  }
})







router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new users({
      name,
      email,
      password: hashedPassword
    });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'mysecretkey');

    // Return token and user data
    res.json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user exists
      const user = await users.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Check if password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.mysecret);
  
      // Return token and user data
      res.json({ token, user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  router.post('/test',Check,(req,res)=>{
    res.send("protected route");
  })
  //protected route for auth
  router.get('/user-auth',Check,(req,res)=>{
    console.log("called");
    res.status(200).send({ok:true});
  })

  router.get('/:id',async (req, res) => {
    const first = await users.findById(req.params.id);
    res.json(first);
}
)

router.post('/:id',(req,res)=>{
  console.log("update is called");
const id = req.params.id;
users.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
        }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({ message : "Error Update user information"})
    })
})



module.exports=router;