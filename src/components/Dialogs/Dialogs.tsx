import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props: any) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props: any) => {
  return <div className={s.dialog}>{props.message}</div>;
};

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dimich" id="1" />
        <DialogItem name="Andrei" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Viktor" id="4" />
        <DialogItem name="Valera" id="5" />
        <DialogItem name="Sasch" id="6" />
        <DialogItem name="Vladimir" id="7" />
      </div>
      <div className="messages">
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Yo" />
        <Message message="Yo" />
        <Message message="Yo" />
      </div>
    </div>
  );
};
