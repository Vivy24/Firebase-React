import { Form } from "react-bootstrap";

const Input = (props) => {
  return (
    <Form.Group className={props.className} controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
        onBlur={props.onBlurHandler}
        value={props.enterValue}
        defaultValue={props.defaultValue}
      ></Form.Control>
      <Form.Text id={`${props.id}helpers`} muted>
        {!props.isTouched && props.helpersMess}

        {props.valueEmpty && (
          <p style={{ color: "red" }}>
            {props.label.charAt(0).toUpperCase() + props.label.slice(1)} must
            not be empty!
          </p>
        )}

        {!props.valueEmpty && props.valueHasError && (
          <p style={{ color: "red" }}>
            {props.label.charAt(0).toUpperCase() + props.label.slice(1)}{" "}
            {props.customErrorMessage
              ? `${props.customErrorMessage}`
              : `is
            invalid!`}
          </p>
        )}
      </Form.Text>
    </Form.Group>
  );
};

export default Input;
