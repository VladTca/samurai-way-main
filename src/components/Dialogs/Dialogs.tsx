import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="dialogs/1">Dimich</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/2">Andrei</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/3">Sveta</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/4">Viktor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/5">Valera</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/6">Sveta2</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/7">Sveta3</NavLink>
        </div>
      </div>
      <div className="messages">
        <div className="message">Hi</div>
        <div className="message">How are you?</div>
        <div className="message">Yo</div>
      </div>
    </div>
  );
};
