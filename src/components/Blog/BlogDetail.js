import { Container } from "react-bootstrap";

const BlogDetail = (props) => {
  return (
    <Container className={"mb-3"} style={{ width: "80%", marginTop: "40px" }}>
      <h1>{props.title}</h1>
      <p className="text-muted">{props.author}</p>
      <hr />
      {props.content}
    </Container>
  );
};

export default BlogDetail;
