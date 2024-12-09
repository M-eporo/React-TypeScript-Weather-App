import styles from '../styles/logo.module.css';
import { Link } from "react-router-dom";

const Logo = () => {
    return (
      <div className={styles.wrapper}>
        <Link to="/">
          <h1 className={styles.title}>Weather Information</h1>
          <p className={styles.subTitle}>React + TypeScript</p>
        </Link>
      </div>
    );
};

export default Logo;