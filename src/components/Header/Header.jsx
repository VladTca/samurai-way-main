import React from "react";
import s from "./Header.module.css";
import volk from "./volk.jpg";

export const Header = () => {
  return (
    <header className={s.header}>
      <img src={volk} alt="logo" />
    </header>
  );
};
