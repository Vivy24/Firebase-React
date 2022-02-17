import { Container, Form, FloatingLabel, Button } from "react-bootstrap";

import Input from "../../UI/input";
import { useValidInput } from "../../hooks/useValidInput";
import { updateDataById } from "../fetchData/fetchFireBase";
import { useNavigate } from "react-router-dom";

const EditBlog = (props) => {
  const navigate = useNavigate();
  const {
    value: enteredTitle,
    hasError: titleHasError,
    empty: titleEmpty,
    isTouched: titleTouched,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useValidInput((title) => {
    return title.length > 0;
  }, props.blog.title);

  const {
    value: enteredContent,
    empty: contentEmpty,
    isTouched: contentTouched,
    valueChangeHandler: contentChangeHandler,
    inputBlurHandler: contentBlurHandler,
    reset: resetContent,
  } = useValidInput((content) => {
    return content.length > 0;
  }, props.blog.content);

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    if (!titleEmpty && !contentEmpty) {
      const blog = {
        author: props.displayName,
        title: enteredTitle,
        content: enteredContent,
      };

      updateDataById(blog, props.id);
    }
    resetTitle();
    resetContent();

    navigate("/myblogs");
  };

  return (
    <Container>
      <h3>Edit Blog</h3>
      {props.blog.title && (
        <Form onSubmit={handlerOnSubmit}>
          <Input
            className="mb-3"
            id="title"
            label="Edit title"
            type="text"
            onChangeHandler={titleChangeHandler}
            onBlurHandler={titleBlurHandler}
            enterValue={enteredTitle}
            isTouched={titleTouched}
            helpersMess="Title must have at least 1 character"
            valueEmpty={titleEmpty}
            valueHasError={titleHasError}
          />
          <Form.Label>Edit Content</Form.Label>
          <FloatingLabel controlId="content" label="Enter your content">
            <Form.Control
              as="textarea"
              placeholder="Enter your content here"
              style={{ height: "100px" }}
              value={enteredContent}
              onChange={contentChangeHandler}
              onBlur={contentBlurHandler}
            />
          </FloatingLabel>

          <Form.Text id="content" muted>
            {!contentTouched && "Content must have at least 1 character"}

            {contentEmpty && (
              <p style={{ color: "red" }}>Content must not be empty!</p>
            )}
          </Form.Text>

          <Button
            style={{ display: "block", marginLeft: "75%", marginTop: "20px" }}
            type="submit"
            variant="primary"
          >
            Edit blog
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default EditBlog;
