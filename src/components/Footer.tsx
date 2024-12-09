import { useContext } from 'react';
import { AppContext } from '../context';
import type { AppContextType } from '../types/types';
import styles from '../styles/footer.module.css';

const Footer = () => {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if (!contextValues) {
    return (
      <footer className={styles.footer}>
        <p>©{new Date().getFullYear()}Weather Information</p>
        <p>React + TypeScript</p>
      </footer>
    );
  } else {
    return (
      <footer className={`${styles.footer}  ${styles.marginTop}`}>
        <p>©{new Date().getFullYear()}Weather Information</p>
        <p>React + TypeScript</p>
      </footer>
    );
  }
};

export default Footer;