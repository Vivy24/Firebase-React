import BlogDetail from "../components/Blog/BlogDetail";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import NavbarHeader from "../components/NavbarHeader";

const DetailBlogPage = () => {
  const projectID = useParams().id;

  const [blogs, setBlogs] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const user = auth.currentUser;

    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    if (user) {
      const fetchData = async () => {
        const database = [];
        const docref = collection(db, "blog");
        const noteSnapshot = await getDocs(docref);

        if (noteSnapshot.docs.length > 0) {
          noteSnapshot.forEach((doc) => {
            const data = doc.data();
            database.push({
              id: doc.id,
              author: data.author,
              title: data.title,
              content: data.content,
            });
          });
        } else {
          console.log("blogs does not exist");
        }
        setBlogs(database);
      };
      fetchData();
    } else {
      navigate("/");
    }
  }, []);
  const project = blogs.find((blog) => {
    return blog.id == projectID;
  });
  return (
    <Fragment>
      <NavbarHeader isLoggedIn={isLoggedIn} />
      {project && (
        <BlogDetail
          title={project.title}
          author={project.author}
          content={project.content}
        />
      )}
    </Fragment>
  );
};
export default DetailBlogPage;
