import { Form, Button, Container } from "react-bootstrap";
import Input from "../../UI/input";

import { useValidInput } from "../../hooks/useValidInput";

const LoginForm = () => {
  const {
    value: enteredUname,
    empty: unameEmpty,
    isTouched: unameTouched,
    valueChangeHandler: unameChangeHandler,
    inputBlurHandler: unameBlurHandler,
    reset: resetUName,
  } = useValidInput(() => {});

  const {
    value: enteredPassword,
    empty: passwordEmpty,
    isTouched: passwordTouched,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useValidInput((password) => {});

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!unameEmpty && !passwordEmpty) {
      return;
    }

    resetUName();
    resetPassword();
  };

  return (
    <Container style={{ maxWidth: "500px", marginTop: "40px" }}>
      <h3 style={{ textAlign: "center" }}>Log In</h3>
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
          valueEmpty={unameEmpty}
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
