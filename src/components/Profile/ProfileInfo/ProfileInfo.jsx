import React from "react";
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="/cartoon.jpg" alt="cartoon" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};
