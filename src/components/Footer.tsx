import { useContext } from 'react';
import { AppContext } from '../context';
import type { AppContextType } from '../types/types';
import { useLocation } from 'react-router-dom';
import styles from '../styles/footer.module.css';

const Footer = () => {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  const location = useLocation();
  if (!contextValues) {
    return (
      <footer className={styles.footer}>
        <p>©{new Date().getFullYear()}Weather Information</p>
        <p>React + TypeScript</p>
      </footer>
    );
  } else {
    return (
      <footer
        className={
          location.pathname === "/detail"
            ? `${styles.footer} ${styles.marginTopNarrow}`
            : `${styles.footer}  ${styles.marginTop}`
        }
      >
        <p>©{new Date().getFullYear()}Weather Information</p>
        <p>React + TypeScript</p>
      </footer>
    );
  }
};

export default Footer;