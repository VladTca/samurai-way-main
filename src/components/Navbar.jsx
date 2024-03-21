import React from "react";
import s from "./Navbar.module.css";

// let s = {
//   nav: "nav",
//   item: "item",
// };
export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a>Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>Messenges</a>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};
