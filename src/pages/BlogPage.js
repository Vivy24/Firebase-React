import { Container } from "react-bootstrap";
import Blog from "../components/Blog/Blog";
import { useEffect, useState, Fragment } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import NavbarHeader from "../components/NavbarHeader";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const BlogPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;

    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    if (user) {
      const fetchData = async () => {
        const DUMMY = [];

        const docref = collection(db, "blog");
        const noteSnapshot = await getDocs(docref);

        if (noteSnapshot.docs.length > 0) {
          noteSnapshot.forEach((doc) => {
            const data = doc.data();

            DUMMY.push({
              id: doc.id,
              author: data.author,
              title: data.title,
              content: data.content,
            });
          });
        } else {
          console.log("blogs does not exist");
        }
        setBlogs(DUMMY);
      };

      fetchData();
    }
  }, []);

  return (
    <Fragment>
      <NavbarHeader isLoggedIn={isLoggedIn} />

      {isLoggedIn ? (
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
      ) : (
        navigate("/")
      )}
    </Fragment>
  );
};

export default BlogPage;
