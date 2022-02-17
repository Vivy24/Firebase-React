import { Container } from "react-bootstrap";
import Blog from "../components/Blog/Blog";
import { useEffect, useState, Fragment } from "react";

import NavbarHeader from "../components/NavbarHeader";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

import { fetchData } from "../components/fetchData/fetchFireBase";

const BlogPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;

    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    if (user) {
      try {
        (async () => {
          const database = await fetchData();

          setBlogs(database);
        })();
      } catch (error) {}
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Fragment>
      <NavbarHeader isLoggedIn={isLoggedIn} />
      <Container>
        {blogs &&
          blogs.map((project) => {
            return (
              <Blog
                key={project.id}
                id={project.id}
                author={project.author}
                title={project.title}
                content={project.content}
              />
            );
          })}
      </Container>
    </Fragment>
  );
};

export default BlogPage;
