import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import NotAuthorize from "../components/NotAuthorize";
const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const username = auth.currentUser;
        if (username) {
          navigate("/blogs");
        }
      }
    });
  }, []);

  return (
    <Fragment>
      <NotAuthorize />
    </Fragment>
  );
};

export default HomePage;
