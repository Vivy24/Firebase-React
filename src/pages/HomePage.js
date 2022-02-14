import NavbarHeader from "../components/NavbarHeader";

import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth } from "firebase/auth";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;

    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  return (
    <Fragment>
      <NavbarHeader isLoggedIn={isLoggedIn} />;
      {isLoggedIn && navigate("/blogs")}
    </Fragment>
  );
};

export default HomePage;
