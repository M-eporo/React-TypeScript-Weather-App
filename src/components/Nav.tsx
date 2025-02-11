import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/nav.module.css';

const Nav = () => {
  const location = useLocation();
  return (
    <nav>
      <ul className={styles.list}>
        <Link
          to="/"
          className={location.pathname === "/" ? styles.disable : styles.link}
        >
          <li>HOME</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;