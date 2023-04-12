const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const Routes=require('./routes/auth');
// const { connectDB}=require('./db');

//configure env
dotenv.config();


//middleware
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
//connect db
// connectDB();


app.use('/api',Routes); 

app.get('/',(req,res)=>{
    res.send({
        messege:"welcome to ecomer app"
    })
})


const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log("server is runnning");
});
const URL=process.env.MONGO_URL;
mongoose.connect(URL)
  .then(() => console.log('Connected!'));