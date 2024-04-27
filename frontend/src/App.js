import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import React, { useEffect } from "react";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import  BlogDetail  from "./components/BlogDetail";
import AddBlogs from "./components/AddBlogs";
import UserBlogs from "./components/UserBlog";
import userSelector from "./components/AddBlogs";
import { useDispatch } from "react-redux";
import { authActions } from "./store";

function App() {
  const dispath = useDispatch();
  const isLoggedIn = userSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions());
    }
  }, [dispath]);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Routes path="/blogs/add" element={<AddBlogs />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Routes path="/myBlogs/:id" element={<BlogDetail />} />
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
