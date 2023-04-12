import React from 'react';
import axios from 'axios';
import {Fragment} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Layout from '../Components/Layout/Layout';
const Register=()=>{

    let navigate=useNavigate();
    const [user,setUser]=React.useState({
    name:"",
        email:"",
        password:"",
    })
    const Handle=(e)=>{
       const {name,value}=e.target;
       setUser({
        ...user,
        [name]:value
       })
       console.log(name,value);
    }
    const {name}=user;
console.log(name);
const HandleLogin= async (event)=>{
    
    try{
      event.preventDefault()
//   console.log(user);
      const res=await axios.post('http://localhost:5000/api/register',user);
      console.log(res)
      if(res){
        navigate('/login');
      }
    }catch(error){
      console.log(error)
    }
}
console.log(user);
    return(
<Layout>
    
      
        
        <form class="form" onSubmit={HandleLogin}> 
    <span className="title">Register</span>
    <label for="username" class="label">Username</label>
    <input type="text" name="name" value={user.name} onChange={Handle} placeholder="Enter your name"></input>
    <label for="email" className="label">Email</label>
    <input  type="text" name="email" value={user.email} onChange={Handle} placeholder="Enter your email"></input>
    <label for="password" className="label">Password</label>
    <input type="text" name="password" value={user.password} onChange={Handle} placeholder='Enter the password'></input>
    <button className='submit'>Register</button>
      
    
  </form>
    </Layout>

    )
}
export default Register;