import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div>
     <Navbar></Navbar> 
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="blogs" element={<Blogs/>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="signup" element={<SignUp/>}/>
     </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
