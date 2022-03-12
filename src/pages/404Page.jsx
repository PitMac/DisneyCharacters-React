import { Link } from "react-router-dom";
import styles from "../styles/Components.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <p className={styles.errorTitle}>404 Error</p>
      <p className={styles.errorSubtitle}>Please back to the home!</p>
      <Link className={styles.backButton} to="/">
        Back
      </Link>
    </div>
  );
}
