import { Container } from "react-bootstrap";
import Blog from "../components/Blog/Blog";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const DUMMY = [];

      const docref = collection(db, "blog");
      const noteSnapshot = await getDocs(docref);

      if (noteSnapshot.docs.length > 0) {
        noteSnapshot.forEach((doc) => {
          const data = doc.data();

          DUMMY.push({
            id: doc.id,
            author: data.author,
            title: data.title,
            content: data.content,
          });
        });
      } else {
        console.log("blogs does not exist");
      }
      setBlogs(DUMMY);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {blogs &&
        blogs.map((project) => {
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
