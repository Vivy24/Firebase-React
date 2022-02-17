import { Routes, Route } from "react-router-dom";

// pages
import AddBlogPage from "./pages/AddBlogPage";
import DetailBlogPage from "./pages/DetailBlogPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BlogPage from "./pages/BlogPage";
import MyBlogPage from "./pages/MyBlogPage";
import EditBlogPage from "./pages/EditBlogPage";

import NotFound from "./components/Form/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/addBlog" element={<AddBlogPage />} />
        <Route path="/blogs/:id" element={<DetailBlogPage />} />
        <Route path="/myblogs" element={<MyBlogPage />} />
        <Route path="/editBlogs/:id" element={<EditBlogPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
