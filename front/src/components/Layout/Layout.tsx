import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <main className={styles.mainLayout}>
      <header>
        <nav>
          <ul>
            <li>
              <Link className={styles.mainNavLink} to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.mainNavLink} to={"/cabinet"}>
                Cabinet
              </Link>
            </li>
            <li>
              <Link className={styles.mainNavLink} to={"/login"}>
                Login
              </Link>
            </li>
            <li>
              <Link className={styles.mainNavLink} to={"/about"}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>2023 All right reserved</p>
      </footer>
    </main>
  );
};

export default Layout;
