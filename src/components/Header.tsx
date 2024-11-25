import Nav from './Nav';
import Logo from './Logo';
import Container from './Container';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo/>
          <Nav/>
        </div>
      </Container>
    </header>
  );
};

export default Header;