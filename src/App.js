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
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import AddProduct from "./Pages/Dashboard/AddProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageProduct from "./Pages/Dashboard/ManageProduct";

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
              <Dashboard></Dashboard>
            </RequiredAuth>
          }>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
            <Route path="addReview" element={<AddReview></AddReview>}></Route>
            <Route path="manageOrder" element={<ManageOrders></ManageOrders>}></Route>
            <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
            <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
            <Route path="manageProduct" element={<ManageProduct></ManageProduct>}></Route>
          </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
