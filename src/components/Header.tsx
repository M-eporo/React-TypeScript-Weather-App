import Nav from './Nav';
import Logo from './Logo';
import Container from './Container';
import styles from '../styles/header.module.css';
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo/>
          {location.pathname === "/detail" && <Nav />}
        </div>
      </Container>
    </header>
  );
};

export default Header;