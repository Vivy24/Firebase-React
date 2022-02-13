import BlogDetail from "../components/Blog/BlogDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const DetailBlogPage = () => {
  const projectID = useParams().id;

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const database = [];
      const docref = collection(db, "blog");
      const noteSnapshot = await getDocs(docref);

      if (noteSnapshot.docs.length > 0) {
        noteSnapshot.forEach((doc) => {
          const data = doc.data();
          database.push({
            id: doc.id,
            author: data.author,
            title: data.title,
            content: data.content,
          });
        });
      } else {
        console.log("blogs does not exist");
      }
      setBlogs(database);
    };

    fetchData();
  }, []);
  const project = blogs.find((blog) => {
    return blog.id == projectID;
  });
  return (
    <div>
      {project && (
        <BlogDetail
          title={project.title}
          author={project.author}
          content={project.content}
        />
      )}
    </div>
  );
};

export default DetailBlogPage;
