import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css'
import CreatePost from "./pages/CreatePost";
import MainPage from "./pages/MainPage";
import Post from "./pages/Post";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <div className="links">
          <a href="/">Main Page</a>
          <a href="/createpost">Create Post</a>
        </div>
      </div>

      <Router>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:postId" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
