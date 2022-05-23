import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./Pages/Shared/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import PartsDetails from "./Pages/Home/PartsDetails";
import RequiredAuth from "./Pages/Login/RequiredAuth";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/parts/:id"
          element={
            <RequiredAuth>
              <PartsDetails></PartsDetails>
            </RequiredAuth>
          }
        />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          path="dashboard"
          element={
            <RequiredAuth>
              <Dashboard>
                
              </Dashboard>
            </RequiredAuth>
          }
        />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
