import React from "react";
import s from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="cartoon.jpg" alt="cartoon" />
      </div>
      <div>avatar + description</div>
      <div>
        Mypost
        <div>New post</div>
        <div className="posts">
          <div className={s.item}>post 1</div>
          <div className={s.item}>post2</div>
        </div>
      </div>
    </div>
  );
};
