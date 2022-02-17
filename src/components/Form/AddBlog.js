import { Form, FloatingLabel, Button, Container } from "react-bootstrap";
import { useValidInput } from "../../hooks/useValidInput";

import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import Input from "../../UI/input";
import { db } from "../../firebase";
const AddBlog = (props) => {
  const navigate = useNavigate();

  const {
    value: enteredTitle,
    isValid: titleIsValid,
    hasError: titleHasError,
    empty: titleEmpty,
    isTouched: titleTouched,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useValidInput((title) => {
    return title.length > 0;
  });

  const {
    value: enteredContent,
    isValid: contentIsValid,
    empty: contentEmpty,
    isTouched: contentTouched,
    valueChangeHandler: contentChangeHandler,
    inputBlurHandler: contentBlurHandler,
    reset: resetContent,
  } = useValidInput((blog) => {
    return blog.length > 0;
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!(titleIsValid && contentIsValid)) {
      return;
    }

    const blog = {
      author: props.username,
      content: enteredContent,
      title: enteredTitle,
    };

    const addBlog = async (blogAdd) => {
      await addDoc(collection(db, "blog"), blogAdd);
    };
    addBlog(blog);

    resetTitle();
    resetContent();

    navigate("/blogs");
  };
  return (
    <Container style={{ maxWidth: "700px", marginTop: "40px" }}>
      <h3 style={{ textAlign: "center" }}>Add a blog</h3>
      <Form onSubmit={onSubmitHandler}>
        <Input
          className="mb-3"
          id="title"
          label="Blog Title"
          type="text"
          placeholder="Enter your title"
          onChangeHandler={titleChangeHandler}
          onBlurHandler={titleBlurHandler}
          enterValue={enteredTitle}
          isTouched={titleTouched}
          helpersMess="Title must have at least 1 character"
          valueEmpty={titleEmpty}
          valueHasError={titleHasError}
        />
        <Form.Label>Blog Content</Form.Label>
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
          Add a blog
        </Button>
      </Form>
    </Container>
  );
};

export default AddBlog;
