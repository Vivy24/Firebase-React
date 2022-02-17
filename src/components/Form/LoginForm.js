import { Form, Button, Container } from "react-bootstrap";
import Input from "../../UI/input";

import { useValidInput } from "../../hooks/useValidInput";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [loginError, setLoginError] = useState([]);

  const navigate = useNavigate();

  const {
    value: enteredEmail,
    empty: emailEmpty,
    isTouched: emailTouched,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useValidInput(() => {});

  const {
    value: enteredPassword,
    empty: passwordEmpty,
    isTouched: passwordTouched,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useValidInput(() => {});

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (emailEmpty && passwordEmpty) {
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        // signed in
        const user = userCredential.user;

        navigate("/");
        // ...
      })
      .catch((error) => {
        const logInError = {
          code: error.code,
          message: error.message,
        };
        setLoginError(logInError);
      });

    resetEmail();
    resetPassword();
  };

  return (
    <Container style={{ maxWidth: "500px", marginTop: "40px" }}>
      <h3 style={{ textAlign: "center" }}>Log In</h3>
      {loginError.message && loginError.message.includes("email") && (
        <p>Invalid email</p>
      )}

      {loginError.message && loginError.message.includes("password") && (
        <p>Invalid password</p>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Input
          className="mb-3"
          id="Email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          onChangeHandler={emailChangeHandler}
          onBlurHandler={emailBlurHandler}
          enterValue={enteredEmail}
          isTouched={emailTouched}
          valueEmpty={emailEmpty}
        />

        <Input
          className="mb-3"
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          onChangeHandler={passwordChangeHandler}
          onBlurHandler={passwordBlurHandler}
          enterValue={enteredPassword}
          isTouched={passwordTouched}
          valueEmpty={passwordEmpty}
        />

        <Button style={{ marginLeft: "75%" }} type="submit" variant="primary">
          Log In
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
