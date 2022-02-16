import NavbarHeader from "../components/NavbarHeader";

import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth } from "firebase/auth";

import NotAuthorize from "../components/NotAuthorize";
const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;

    user ? setIsLoggedIn(true) : setIsLoggedIn(false);

    if (user) {
      navigate("/blogs");
    }
  }, []);

  return (
    <Fragment>
      <NotAuthorize />
    </Fragment>
  );
};

export default HomePage;
