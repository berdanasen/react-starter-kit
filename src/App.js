import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog from "./pages/blog/Blog";
import Blog404 from "./pages/blog/404";
import Page404 from "./pages/404";

function App () {

  return (
    <>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive && 'aktif'}>Anasayfa</NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({
          backgroundColor: isActive ? 'red' : 'transparent' 
        })}>İletişim</NavLink>
        <NavLink to="/blog">
          {({ isActive }) => (
            <>
              Blog
              {isActive && '(Aktif)'}
            </>
          )}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index={true} element={<Blog />} />
          <Route path="categories" element={<Categories />} />
          <Route path="post/:id/:url" element={<Post />} />
          <Route path="*" element={<Blog404 />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
    
  )
}

export default App;