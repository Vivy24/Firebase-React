import AddBlog from "../components/Form/AddBlog";
import { useState, useEffect, Fragment } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import NavbarHeader from "../components/NavbarHeader";

const AddBlogPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const username = auth.currentUser;
        if (username) {
          const name = user.displayName;
          setDisplayName(name);

          user ? setIsLoggedIn(true) : setIsLoggedIn(false);
        }
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <Fragment>
      <NavbarHeader isLoggedIn={isLoggedIn} />
      <AddBlog username={displayName} />
    </Fragment>
  );
};

export default AddBlogPage;
