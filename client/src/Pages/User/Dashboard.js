import React from "react";
import Layout from "../../Components/Layout/Layout";
import { useAuth } from "../../context/auth";
import   '../style.css';
import { NavLink, useNavigate } from "react-router-dom";
import Usermenu from "../../Components/Layout/Usermenu";
import axios from 'axios';
import { useState,useEffect } from "react";
const id=localStorage.getItem('id');
const name=localStorage.getItem('name');

const Dashboard=()=>{
    const [auth]=useAuth();
    let navigate=useNavigate();
    const Handle=()=>{
navigate(`/edit`)
    }
    
    const [user,setUser]=useState({
      name:"",
      email:"",
    
  })

    useEffect(()=>{
      axios.get(`http://localhost:5000/api/${auth?.user._id}`)
      .then((res)=>setUser(res.data)
      );
        },[])

console.log(user);
    return(
        <Layout>
           <div>


  <Usermenu/>
  <div className="card-container">
    <span className="pro">PRO</span>
    <img className="round" src="" alt="user" />
    <h3>{user.name}</h3>
    <h3>Email:{user.email}</h3>
    {/* <h1>{name}</h1> */}
    {/* <h3>{auth?.user._id}</h3> */}
    <p>User interface designer and <br /> front-end developer</p>
    <div className="buttons">
      <button onClick={Handle} className="primary">
        Edit
      </button>
      <button className="primary ghost">
        Following
      </button>
    </div>
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        <li>UI / UX</li>
        <li>Front End Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </div>
  </div>
 
</div>

        </Layout>
    )
}
export default Dashboard;