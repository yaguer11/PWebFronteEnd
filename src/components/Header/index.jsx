import styles from "../../styles/Header.module.scss";

/* eslint-disable react/prop-types */
function Header({ onToggleTheme, theme }) {
  return (
    <header className={styles.header}>
      <h1
        className={`${styles.textoEncabezado} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
      >
        Lista de tareas
      </h1>
      <button
        onClick={onToggleTheme}
        className={`${styles.botonTema} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
      >
        {theme === "light" ? (
          <span className="material-symbols-outlined">dark_mode</span>
        ) : (
          <span className="material-symbols-outlined">light_mode</span>
        )}
      </button>
    </header>
  );
}

export default Header;
