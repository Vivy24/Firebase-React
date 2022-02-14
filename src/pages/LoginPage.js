import LoginForm from "../components/Form/LoginForm";

import NavbarHeader from "../components/NavbarHeader";

import { Fragment } from "react";

const LoginPage = () => {
  return (
    <Fragment>
      <NavbarHeader />
      <LoginForm />;
    </Fragment>
  );
};

export default LoginPage;
