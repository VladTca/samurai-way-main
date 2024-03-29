import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
    let postData = [
        {
            id: 1,
            message: "Hi, how are you?",
            likeCount:12,
        },
        {
            id: 2,
            message: "It's my first post",
            likeCount:11,
        },
        {
            id: 3,
            message: "Yo",
        },
        {
            id: 4,
            message: "Yo",
        },
        {
            id: 5,
            message: "Yo",
        },
        {
            id: 6,
            message: "Yo",
        },
        {
            id: 7,
            message: "Yo",
        },
    ];
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
      <Post message={postData[0].message} likesCount={postData[0].likeCount} />
      <Post message={postData[1].message} likesCount={postData[1].likeCount} />
    </div>
  );
};
