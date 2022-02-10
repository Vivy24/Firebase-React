import { Container } from "react-bootstrap";
import Blog from "../components/Blog/Blog";

const BlogPage = () => {
  const DUMMY_DATABASE = [
    {
      id: "1",
      author: "Dummy 1 ",
      title: "Dummy 1 Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum mauris pharetra ante porta, eu vestibulum mauris vehicula. Praesent finibus eros in justo aliquam aliquet. Aliquam eros ex, tempor vel neque a, fringilla laoreet tellus. Cras molestie ac eros at posuere. Sed quis tempus nunc, eu luctus tortor. Nam in lorem condimentum, imperdiet justo et, scelerisque ante. Proin feugiat aliquet tristique. Nam elementum, ligula sed iaculis pharetra, odio metus aliquam dui, sit amet ultrices dui velit sed nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: "2",
      author: "Dummy 2",
      title: "Dummy 2 title",
      content:
        "Phasellus porttitor vestibulum erat, sit amet laoreet turpis sagittis vitae. Nam lobortis arcu et lacus vestibulum, a laoreet ante maximus. Pellentesque dapibus tempor augue, non maximus risus pulvinar faucibus. Nullam vitae neque at nisl tempus mattis ut non sem. Duis accumsan vehicula nisl, eu laoreet leo sagittis sed. Donec eget magna ut felis porta porta. Nulla malesuada orci at risus varius, in auctor lectus semper. Donec id est magna. Nulla vehicula augue nulla, at auctor sem condimentum vitae. Donec imperdiet dolor ex, eu finibus tellus dapibus eget. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada a leo vitae tincidunt. Donec hendrerit ex orci. Aenean eget nulla nibh.",
    },
    {
      id: "3",
      author: "Dummy 3",
      title: "Dummy 3 title",
      content:
        "Ut at interdum est. Vivamus congue nunc a dolor interdum, sit amet dignissim quam posuere. Phasellus lobortis porta turpis, porta finibus lectus aliquet non. Nulla vel tempor velit. Donec sit amet libero sit amet ante suscipit consequat non at arcu. Suspendisse malesuada, velit maximus eleifend laoreet, dolor elit accumsan sapien, sit amet consequat nibh purus dictum erat. Aliquam efficitur quis mauris eget hendrerit. Sed fermentum gravida mi. Integer convallis interdum egestas. Ut tempor sapien vel dolor pretium, id consectetur sem suscipit. Fusce sollicitudin dui neque, eget ornare dui convallis quis. Suspendisse in lorem sed nulla efficitur interdum sed vel est. Nullam vel ante sed lacus fringilla eleifend pulvinar id ante. Proin accumsan fermentum neque ut consectetur.",
    },
  ];

  return (
    <Container>
      {DUMMY_DATABASE.map((project) => {
        return (
          <Blog
            key={project.id}
            id={project.id}
            author={project.author}
            title={project.title}
            content={project.content}
          />
        );
      })}
    </Container>
  );
};

export default BlogPage;
