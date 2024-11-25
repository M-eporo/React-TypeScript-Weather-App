import { ReactNode } from "react";
//import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from '../components/Container';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header/>
      <main>
        <Container>
          { children }
        </Container>
      </main>
      <Footer/>
    </>
  );
};

export default Layout;