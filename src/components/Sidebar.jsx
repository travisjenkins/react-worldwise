import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* The Outlet component is used for nested routes (i.e., similar to the children prop for components) */}
      <Outlet />
      <Footer styles={styles} />
    </div>
  );
}

export default Sidebar;
