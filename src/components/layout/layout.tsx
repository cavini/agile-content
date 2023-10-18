import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "../navigationbar/NavigationBar";

const Layout = () => {
  return (
    <>
      {/* header goes here */}
      {/* navbar goes here */}
      <NavigationBar />
      <Container>
        <Outlet />
      </Container>
      {/* footer goes here */}
    </>
  );
};

export default Layout;
