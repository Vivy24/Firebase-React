import { Form, Button, Container } from "react-bootstrap";
import { useValidInput } from "../hooks/useValidInput";

import Input from "../UI/input";

export const RegisterForm = () => {
  const {
    value: enteredUname,
    isValid: unameIsValid,
    hasError: unameHasError,
    empty: unameEmpty,
    isTouched: unameTouched,
    valueChangeHandler: unameChangeHandler,
    inputBlurHandler: unameBlurHandler,
    reset: resetUName,
  } = useValidInput((value) => {
    return value.length > 4;
  });

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    empty: emailEmpty,
    isTouched: emailTouched,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useValidInput((email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  });

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    empty: passwordEmpty,
    isTouched: passwordTouched,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetpassword,
  } = useValidInput((password) => {
    return /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(
      password
    );
  });

  const {
    value: enteredCPassword,
    isValid: cPasswordIsValid,
    hasError: cPasswordHasError,
    empty: cPasswordEmpty,
    isTouched: cPasswordTouched,
    valueChangeHandler: cPasswordChangeHandler,
    inputBlurHandler: cPasswordBlurHandler,
    reset: resetCPassword,
  } = useValidInput((cPassword) => {
    return cPassword === enteredPassword;
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (
      !(unameIsValid && emailIsValid && passwordIsValid && cPasswordIsValid)
    ) {
      return;
    }

    // submit the information (todo);
    resetUName();
    resetEmail();
    resetpassword();
    resetCPassword();
  };

  return (
    <Container style={{ maxWidth: "500px", marginTop: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Register</h3>
      <Form onSubmit={handleOnSubmit}>
        <Input
          className="mb-3"
          id="username"
          label="Username"
          type="text"
          placeholder="Enter your username"
          onChangeHandler={unameChangeHandler}
          onBlurHandler={unameBlurHandler}
          enterValue={enteredUname}
          isTouched={unameTouched}
          helpersMess="Username must has over 4 characters"
          valueEmpty={unameEmpty}
          valueHasError={unameHasError}
        />

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
          helpersMess="It should be a valid email"
          valueEmpty={emailEmpty}
          valueHasError={emailHasError}
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
          helpersMess="Password should be more than 8 characters, including one uppercase letter, one lowercase letter, one number and special character"
          valueEmpty={passwordEmpty}
          valueHasError={passwordHasError}
        />

        <Input
          className="mb-3"
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          onChangeHandler={cPasswordChangeHandler}
          onBlurHandler={cPasswordBlurHandler}
          enterValue={enteredCPassword}
          isTouched={cPasswordTouched}
          helpersMess="Please re-enter to confirm your password"
          valueEmpty={cPasswordEmpty}
          valueHasError={cPasswordHasError}
          customErrorMessage="should match with password"
        />

        <Button style={{ marginLeft: "75%" }} type="submit" variant="primary">
          Register
        </Button>
      </Form>
    </Container>
  );
};
