import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}></div>
      <Post message="Hi, how are you?" count="  Like count =20" />
      <Post message="It's my first post" count="  Like count =15" />
    </div>
  );
};
