import { NavLink } from "react-router-dom";
const Usermenu=()=>{
    
    return(
        <ul className="list-group">
  <NavLink  to="/dashboard/user/createCategory"className="list-group-item">Create Category </NavLink>
  <br></br>
  <NavLink  to="/dashboard/user/product"className="list-group-item">Create Product</NavLink>
  <br></br>
  <NavLink  to="/dashboard/user/users" className="list-group-item">Users</NavLink>
  <br></br>
</ul>
    )
}
export default Usermenu;