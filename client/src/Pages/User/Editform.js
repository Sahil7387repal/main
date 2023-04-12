import React from "react";
import '../style.css';
import Dashboard from "./Dashboard";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useEffect,useState } from "react";
import axios from 'axios'
const Edit=()=>{
  const [auth,setAuth]=useAuth();
    let navigate=useNavigate();


    const [user,setUser]=useState({
        name:"",
        email:"",
      
    })
    // const {id}=useParams;

    const Handle=(e)=>{
        const {name,value}=e.target;
        setUser({
         ...user,
         [name]:value
        })
        console.log(user);
     }
     useEffect(()=>{
        axios.get(`http://localhost:5000/api/${auth?.user._id}`)
        .then((res)=>setUser(res.data)
        );
          },[])

     const HandleB=()=>{
      if(auth?.user){
      const res=  axios.post(`http://localhost:5000/api/${auth?.user._id}`,user);
    
 
console.log(auth);
      }
        // navigate('/Dashboard');
     }














    return(
        <div className="container-xl px-4 mt-4">
  {/* Account page navigation*/}

  <hr className="mt-0 mb-4" />
  <div className="row">
    <div className="col-xl-4">
      {/* Profile picture card*/}
      <div className="card mb-4 mb-xl-0">
        <div className="card-header">Profile Picture</div>
        <div className="card-body text-center">
          {/* Profile picture image*/}
          <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt />

        </div> 
      </div>
    </div>
    <div className="col-xl-8">
      {/* Account details card*/}
      <div className="card mb-4">
        <div className="card-header">Account Details</div>
        <div className="card-body">
          <form>
            {/* Form Group (username)*/}
            <div className="mb-3">
              <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
              <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" name="name" onChange={Handle} value={user.name} />
            </div>
            {/* Form Row*/}
           
              {/* Form Group (first name)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputFirstName">email</label>
                <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" email="email" onChange={Handle} value={user.email} />
              </div>
             
            <button className="btn btn-primary" type="button" onClick={HandleB}>Save changes</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    )

}
export default Edit;