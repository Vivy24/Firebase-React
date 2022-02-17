import { db } from "../../firebase";

import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
export const fetchData = async () => {
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
    throw new Error({
      message: "blogs does not exist",
    });
  }

  return database;
};

export const queryData = async (key, how, value) => {
  const database = [];
  const blogsRef = collection(db, "blog");

  const q = query(blogsRef, where(key, how, value));
  const querySnapShot = await getDocs(q);

  if (querySnapShot.docs.length > 0) {
    querySnapShot.forEach((doc) => {
      const data = doc.data();

      database.push({
        id: doc.id,
        author: data.author,
        title: data.title,
        content: data.content,
      });
    });
  } else {
    throw new Error({
      message: "blogs does not exist",
    });
  }

  return database;
};

export const getDataById = async (id) => {
  const blogRef = doc(db, "blog", id);
  const blog = await getDoc(blogRef);
  return blog.data();
};

export const deleteDataById = async (id) => {
  await deleteDoc(doc(db, "blog", id));
};

export const updateDataById = async (blog, id) => {
  const blogsRef = doc(db, "blog", id);

  await updateDoc(blogsRef, {
    content: blog.content,
    title: blog.title,
  })
    .then(() => {})
    .catch((error) => {});
};
