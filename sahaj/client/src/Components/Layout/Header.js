import { NavLink } from "react-router-dom"
import { useAuth } from "../../context/auth"
import toast from 'react-hot-toast';
const Header=()=>{
  const [auth,setAuth]=useAuth();
  const Handle=()=>{
setAuth({
  ...auth,
  user:null,
  token:""
})
localStorage.removeItem('auth');
alert("Logout successFully");
  }
    return (
        <>
        <body>
    <div className="navbar">
      <NavLink to="/"className="active" href="#home">Home</NavLink>
      {!auth.user&&< NavLink to="/login" href="#news">Login</NavLink>}
     { !auth.user&&<NavLink to="/Register" href="#contact">Register</NavLink>}
      <NavLink to="/Login" onClick={Handle}href="#about">Logout</NavLink >
    </div>
    
  </body>

        
        </>
        
    )
}
export default Header