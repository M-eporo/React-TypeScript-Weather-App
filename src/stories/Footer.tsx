import styles from "./footer.module.css"

const Footer = ({ color }: {color: string}) => {
  return (
    <footer className={styles.footer} style={{color: color}}>
      <p>©{new Date().getFullYear()} React + TypeScript Weather App</p>
    </footer>
  );
};

export default Footer;