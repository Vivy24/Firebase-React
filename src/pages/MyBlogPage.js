import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";

import Blog from "../components/Blog/Blog";
import NavbarHeader from "../components/NavbarHeader";
import { Spinner } from "react-bootstrap";
import {
  queryData,
  deleteDataById,
} from "../components/fetchData/fetchFireBase";

const MyBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loaded, setLoaded] = useState();

  const [error, setError] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const username = auth.currentUser;

        if (username) {
          const name = username.displayName;
          try {
            (async () => {
              const database = await queryData("author", "==", name);
              setBlogs(database);
            })();
          } catch (error) {
            setError(error);
          }

          setLoaded("done");
        }
      } else {
        navigate("/");
      }
    });
  }, []);

  const ondeleteHandler = (blogID) => {
    deleteDataById(blogID).then(() => {
      window.location.reload();
    });
  };

  const editBlogHandler = (blogID) => {
    navigate(`/editBlogs/${blogID}`);
  };

  return (
    <Fragment>
      <NavbarHeader isLoggedIn={true} />

      {loaded === "done" && !error ? (
        blogs.length > 0 ? (
          blogs.map((blog) => {
            return (
              <Blog
                key={blog.id}
                delete={true}
                id={blog.id}
                title={blog.title}
                content={blog.content}
                author={blog.author}
                edit={true}
                deleteHandler={ondeleteHandler}
                editHandler={editBlogHandler}
              />
            );
          })
        ) : (
          <p style={{ textAlign: "center", marginTop: "40px" }}>
            You have no blogs to show
          </p>
        )
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div class="text-center" style={{ marginTop: "40px" }}>
          <Spinner
            animation="border"
            role="status"
            variant="primary"
            size="700px"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </Fragment>
  );
};

export default MyBlogPage;
