import styles from "../styles/Components.module.css";

export const NavigationButtons = ({ page, setPage }) => {
  const nextPage = () => {
    setPage(page + 1);
  };

  const backPage = () => {
    setPage(page - 1);
  };

  return (
    <>
      <section className={styles.buttonSection}>
        {page !== 1 && (
          <button className={styles.backButton} onClick={backPage}>
            &lt;
          </button>
        )}
        <button className={styles.backButton} onClick={nextPage}>
          &gt;
        </button>
      </section>
      <br />
      <br />
    </>
  );
};
