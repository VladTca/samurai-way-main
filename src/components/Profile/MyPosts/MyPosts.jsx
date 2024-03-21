import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}></div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
