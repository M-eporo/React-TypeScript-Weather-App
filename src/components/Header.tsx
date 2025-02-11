import Nav from './Nav';
import Logo from './Logo';
import Container from './Container';
import LocationForm from './LocationForm';
import styles from '../styles/header.module.css';
import { useLocation } from "react-router-dom";
import { useAppSelector } from '../app/hooks';
import { auth } from '../firebase';

const Header = () => {
  const location = useLocation();
  const user = useAppSelector((state) => state.user.user);

  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo />

          <div className={styles.innerContainer}>
            <img
              className={styles.userImg}
              src={user?.photo}
              alt="userlogo"
              onClick={() => auth.signOut()}
            />
            {location.pathname !== "/detail" && <LocationForm />}
            {location.pathname === "/detail" && <Nav />}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;