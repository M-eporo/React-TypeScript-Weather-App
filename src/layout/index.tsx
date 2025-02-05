import { ReactNode } from "react";
//import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from '../components/Container';
import Background from "../components/Background";
import { useAppSelector } from "../app/hooks";
import Login from "../components/Login";

const Layout = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <>
      {user ? (
      <>
        <Header/>
        <main>
        <Container>
          { children }
        </Container>
        </main>
        <Footer />
        <Background />
      </>
      ) : (
        <Login/>
      )}
    </>
  );
};

export default Layout;