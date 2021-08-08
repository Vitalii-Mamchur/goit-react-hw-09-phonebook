import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "../UserMenu/default-avatar.png";
import styles from "./UserMenu.module.css";
import { Button } from "@material-ui/core";

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <img src={defaultAvatar} alt="Avatar" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <Button
        type="button"
        onClick={onLogout}
        variant="outlined"
        color="primary"
      >
        Logout
      </Button>
    </div>
  );
}

export default UserMenu;
