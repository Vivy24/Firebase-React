import { useParams, useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, Fragment } from "react";

import { getDataById } from "../components/fetchData/fetchFireBase";

import EditBlog from "../components/Form/EditBlog";

import NavbarHeader from "../components/NavbarHeader";

const EditBlogPage = () => {
  const [blog, setBlog] = useState();
  const [error, setError] = useState([]);
  const [loaded, setLoaded] = useState([]);
  const [isloggedin, setIsLoggedIn] = useState();
  const [username, setUserName] = useState();

  const blogID = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const username = auth.currentUser;
        if (username) {
          try {
            (async () => {
              const database = await getDataById(blogID);
              setBlog(database);
            })();
          } catch (error) {
            setError(error);
          }
          setUserName(username);

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
      <NavbarHeader isLoggedIn={true} />
      {blog && <EditBlog blog={blog} id={blogID} displayName={username} />}
    </Fragment>
  );
};

export default EditBlogPage;
