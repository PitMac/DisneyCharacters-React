import { useLocation } from "wouter";
import styles from "../styles/Components.module.css";

export const NavBar = () => {
  const [location, setLocation] = useLocation();
  const handleHome = () => {
    setLocation("/");
    window.location.reload(false);
  };

  return (
    <div className={styles.navBar}>
      <button className={styles.title} onClick={handleHome}>
        Disney Characters
      </button>
      <a
        className={styles.apiLink}
        target="_blank"
        href="https://disneyapi.dev/"
      >
        API
      </a>
    </div>
  );
};
