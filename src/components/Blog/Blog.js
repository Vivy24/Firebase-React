import { Card } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const Blog = (props) => {
  return (
    <Card style={{ marginTop: "40px" }}>
      <Card.Body>
        <Card.Title>
          <NavLink to={`/blogs/${props.id}`}>{props.title}</NavLink>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.author}
        </Card.Subtitle>
        <Card.Text>
          {props.content.substring(0, 50)}
          {"... "}
          <NavLink to={`/blogs/${props.id}`}>read more</NavLink>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Blog;
