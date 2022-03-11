import styles from "../styles/Components.module.css";

export const NavigationButtons = ({ page, setPage }) => {
  return (
    <>
      <section className={styles.buttonSection}>
        {page !== 1 && (
          <button
            className={styles.backButton}
            onClick={() => setPage(page - 1)}
          >
            &lt;
          </button>
        )}
        <button className={styles.backButton} onClick={() => setPage(page + 1)}>
          &gt;
        </button>
      </section>
      <br />
      <br />
    </>
  );
};
