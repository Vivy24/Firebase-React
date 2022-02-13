import NavbarHeader from "./components/NavbarHeader";

import { Routes, Route } from "react-router-dom";

// pages
import AddBlogPage from "./pages/AddBlogPage";
import DetailBlogPage from "./pages/DetailBlogPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BlogPage from "./pages/BlogPage";
function App() {
  return (
    <div className="App">
      <NavbarHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add" element={<AddBlogPage />} />
        <Route path="/blogsDetail/:id" element={<DetailBlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
