import React from "react";
import { style } from "./styles";
import { Button } from "react-bootstrap";
import { logout } from "../../config/firebase";

function Header(props) {
  const signout = async () => {
    const { history } = props;

    try {
      await logout();
      history.replace("/");
    } catch (error) {
      console.log("error while doing logout", error);
    }
  };

  return (
    <div style={style.headerContainer}>
      <p style={style.headerTitle}>
        Web <span style={style.secondaryTitle}>App</span>
      </p>
      <Button
        variant="danger"
        style={style.btnLogout}
        onClick={() => signout()}
      >
        Logout
      </Button>
    </div>
  );
}

export default Header;
