import React from "react";
import s from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div>
      <div>
        <img src="cartoon.jpg" alt="cartoon" />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};
