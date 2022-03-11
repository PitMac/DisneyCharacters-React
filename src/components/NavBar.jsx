import styles from "../styles/Components.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <h1 className={styles.title}>Disney Characters</h1>
      <a className={styles.apiLink} href="https://disneyapi.dev/">
        API
      </a>
    </div>
  );
};
