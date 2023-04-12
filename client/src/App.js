
import { Route,Routes, } from 'react-router-dom';
import Home from './Pages/Home';
import Pagenotfound from './Pages/Pagenotfound'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/User/Dashboard';
import PrivateRoute from './Components/Routes/Private';
import CreateCat from './Pages/User/createCat';
import CreateProduct from './Pages/User/createProduct';
import Edit from './Pages/User/Editform';
import All from './Pages/All';
function App() {
  return (
    <>
    {/* <Home></Home>  */}
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
   <Route path="/*" element={<Pagenotfound></Pagenotfound>}></Route>
   <Route path="/register" element={<Register></Register>}></Route>


   {/* <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
    <Route path="" element={<Dashboard></Dashboard>}></Route>
    
   <Route path="user/createCategory" element={<CreateCat/>}> </Route>
    <Route path="user/product" element={<CreateProduct></CreateProduct>}></Route>
   
   </Route> */}
   <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
<Route path="/edit" element={<Edit/>}> </Route>
<Route path="/Allusers" element={<All></All>}> </Route>
    </Routes>
   </>
 
  );
}

export default App;
