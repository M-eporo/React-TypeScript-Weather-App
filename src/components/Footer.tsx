import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>©{new Date().getFullYear()} React + TypeScript Weather App</p>
    </footer>
  );
};

export default Footer;