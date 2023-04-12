import React from 'react';
 import axios from 'axios';
import {Fragment} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'
import Layout from '../Components/Layout/Layout';
import { useAuth } from '../context/auth';
const Login=()=>{
const [auth,setAuth]=useAuth();
    let navigate=useNavigate();
    const [user,setUser]=React.useState({
    
        email:"",
        password:"",
    })
    const Handle=(e)=>{
       const {name,value}=e.target;
       setUser({
        ...user,
        [name]:value
       })
      //  console.log(name,value);
    }
const HandleLogin= async (event)=>{
    
    try{
      event.preventDefault()
  // console.log(user);
      const res=await axios.post('http://localhost:5000/api/login',user);
      console.log(res.data)

      // localStorage.setItem('name',res.data._id);
      if(res){
    localStorage.setItem('auth',JSON.stringify(res.data))
setAuth({
  ...auth,
  user:res.data.user,
  token:res.data.token,
})

        navigate('/');
      }
    }catch(error){
      console.log(error)
    }
}
console.log(user);
    return(
<Layout>
    <div className="form-box">
<form className="form" onClick={HandleLogin}>
    <span className="title">Log in</span>
    <span className="subtitle">Create a free account with your email.</span>
    <div className="form-container">
    <input type="text" name="email" value={user.email} onChange={Handle} placeholder="Enter your Email"></input>
        <input type="text" name="password" value={user.password} onChange={Handle} placeholder="Enter your Password"></input>
    </div>
    <button>Log in</button>
</form>
<div class="form-section">
  {/* <p>you can register? <a href="">Sign up</a> </p> */}
</div>
</div>
    </Layout>

    )
}
export default Login;