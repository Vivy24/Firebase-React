import AddBlog from "../components/Form/AddBlog";
import { useState, useEffect, Fragment } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import NavbarHeader from "../components/NavbarHeader";

const AddBlogPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUserName] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;

    user ? setIsLoggedIn(true) : setIsLoggedIn(false);

    if (user) {
      const name = user.displayName;
      setUserName(name);

      console.log({ name });
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Fragment>
      <NavbarHeader isLoggedIn={isLoggedIn} />
      <AddBlog username={username} />
    </Fragment>
  );
};

export default AddBlogPage;
