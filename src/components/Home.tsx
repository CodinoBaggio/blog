import React, { useEffect, useState } from 'react';
import './Home.css';
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase';

export const Home = () => {
  const [postList, setPostList] = useState<any>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  console.log(postList);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'posts', id));
  };

  return (
    <div className="homePage">
      {postList.map((post: any) => (
        <div className="postContents" key={post.id}>
          <div className="postTitle">
            <h1>{post.title}</h1>
          </div>
          <div className="postText">{post.postText}</div>
          <div className="nameAn">
            <h3>{post.auther.username}</h3>
            <button onClick={(e) => handleDelete(post.id)}>削除</button>
          </div>
        </div>
      ))}
    </div>
  );
};
