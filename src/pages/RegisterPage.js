import { RegisterForm } from "../components/Form/RegisterForm";
import { Fragment } from "react";
import NavbarHeader from "../components/NavbarHeader";

const RegisterPage = () => {
  return (
    <Fragment>
      <NavbarHeader />
      <RegisterForm />
    </Fragment>
  );
};
export default RegisterPage;
