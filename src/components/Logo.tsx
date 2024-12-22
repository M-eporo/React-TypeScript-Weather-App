import styles from '../styles/logo.module.css';
import { Link } from "react-router-dom";

const Logo = () => {
    return (
      <div className={styles.wrapper}>
        <Link to="/">
          <div className={styles.titleWrapper}>
            <div className={styles.original}>
              <h1 className={styles.title}>Weather Information</h1>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default Logo;