import BlogDetail from "../components/Blog/BlogDetail";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NavbarHeader from "../components/NavbarHeader";

import { Spinner } from "react-bootstrap";
import { getDataById } from "../components/fetchData/fetchFireBase";

const DetailBlogPage = () => {
  const projectID = useParams().id;

  const [blog, setBlog] = useState([]);
  const [error, setError] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const username = auth.currentUser;
        if (username) {
          try {
            (async () => {
              const database = await getDataById(projectID);

              setBlog(database);
            })();
          } catch (error) {
            setError(error);
          }

          user ? setIsLoggedIn(true) : setIsLoggedIn(false);

          setLoaded("done");
        } else {
          navigate("/");
        }
      }
    });
  }, []);

  return (
    <Fragment>
      <NavbarHeader isLoggedIn={isLoggedIn} />
      {blog && loaded && !error ? (
        <BlogDetail
          title={blog.title}
          author={blog.author}
          content={blog.content}
        />
      ) : !loaded ? (
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
      ) : (
        <p>{error ? error : "No blog to show"}</p>
      )}
    </Fragment>
  );
};
export default DetailBlogPage;
