
import { Route,Routes, } from 'react-router-dom';
import Home from './Pages/Home';
import Pagenotfound from './Pages/Pagenotfound'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/User/Dashboard';
import PrivateRoute from './Components/Routes/Private';
function App() {
  return (
    <>
    {/* <Home></Home>  */}
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
   <Route path="/*" element={<Pagenotfound></Pagenotfound>}></Route>
   <Route path="/register" element={<Register></Register>}></Route>
   <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
   </Route>
    </Routes>
   
   </>
 
  );
}

export default App;
