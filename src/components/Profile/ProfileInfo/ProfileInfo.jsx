import React from "react";
import s from "./ProfileInfo.module.css";
import cartoon from "./cartoon.jpg";

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={cartoon} alt="cartoon" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};
