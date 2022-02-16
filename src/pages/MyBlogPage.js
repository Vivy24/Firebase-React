import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import Blog from "../components/Blog/Blog";
import NavbarHeader from "../components/NavbarHeader";

const MyBlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const username = auth.currentUser;

        if (username) {
          const name = username.displayName;

          const fetchBlogByName = async (uname) => {
            const blogsRef = collection(db, "blog");
            const q = query(blogsRef, where("author", "==", uname));

            const querySnapShot = await getDocs(q);
            querySnapShot.forEach((doc) => {
              const blog = {
                id: doc.id,
                data: doc.data(),
              };
              setBlogs((prevState) => {
                return [...prevState, blog];
              });
            });
          };
          fetchBlogByName(name);
        }
      } else {
        navigate("/");
      }
    });
  }, []);

  const ondeleteHandler = (blogID) => {
    const deteleBlog = async (id) => {
      await deleteDoc(doc(db, "blog", id));
    };
    deteleBlog(blogID).then(() => {
      window.location.reload();
    });
  };

  return (
    <Fragment>
      <NavbarHeader isLoggedIn={true} />
      {blogs.map((blog) => {
        return (
          <Blog
            key={blog.id}
            delete={true}
            id={blog.id}
            title={blog.data.title}
            content={blog.data.content}
            author={blog.data.author}
            deleteHandler={ondeleteHandler}
          />
        );
      })}
    </Fragment>
  );
};

export default MyBlogPage;
