import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category_page from "./pages/Category_page";
import Home2 from "./pages/Home2";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Register from "./pages/Register";
import Comments from "./pages/Comments";
import Blog_details from "./pages/Blog_details";
import Userprofile from "./pages/Userprofile";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Home />}></Route>
          <Route path="/Category" element={<Category_page />}></Route>
          <Route path="/2" element={<Home2/>}></Route>
          <Route path="/start" element={<Start/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/otp" element={<Otp/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/comments" element={<Comments/>}></Route>
          <Route path="/blogdetails" element={<Blog_details/>}></Route>
          <Route path="/userprofile" element={<Userprofile/>}></Route>

          


        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
