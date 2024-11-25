import { Link } from 'react-router-dom';
import styles from '../styles/nav.module.css';

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <Link to="/">
          <li>TOP</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;