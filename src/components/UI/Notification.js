import React from "react";
import classes from "./Notification.module.css";

const Notification = (props) => {
  let notClass;
  if (props.status === "error") {
    notClass = `${classes.notification} ${classes.error}`;
  }
  if (props.status === "pending") {
    notClass = `${classes.notification} ${classes.pending}`;
  }
  if (props.status === "success") {
    notClass = `${classes.notification} ${classes.success}`;
  }
  return (
    <div className={notClass}>
      <div className={classes["left-bx"]}>
        <p className="currant-status">{props.title}</p>
      </div>
      <div className={classes["right-bx"]}>
        <p className="data-status">{props.message}</p>
      </div>
    </div>
  );
};

export default Notification;
