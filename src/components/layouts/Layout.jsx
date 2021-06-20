import React from "react";
import Navbar from "../elements";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.page_container}>
      <Navbar />
      <div className={styles.page_body_container}>{children}</div>
    </div>
  );
};

export default Layout;
