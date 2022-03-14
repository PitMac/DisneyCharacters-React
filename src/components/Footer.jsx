import styles from "../styles/Components.module.css";

export const Footer = () => {
  return (
    <div className={styles.navBar}>
      <h2>Jhon Dev</h2>
      <a
        className={styles.backButton}
        target="_blank"
        href="https://jhondev.vercel.app/"
      >
        Portfolio
      </a>
    </div>
  );
};
