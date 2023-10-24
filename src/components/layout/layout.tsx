import { Container } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../navigationbar/NavigationBar";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <NavigationBar currentPage={location.pathname} />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
