import React from "react";
import {
  Col,
  Form,
  InputGroup,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import ImageContainer from "../image-container/ImageContainer";
import { navigationBarStyle } from "./style";
import TextInput from "../textinput/TextInput";
import { Search, X } from "react-bootstrap-icons";

const NavigationBar = () => {
  return (
    <Navbar style={navigationBarStyle}>
      <Navbar.Brand href="#home">
        <ImageContainer
          styling={{
            width: 150,
            styles: {
              // marginLeft: "15px",
            },
          }}
          source="src/assets/images/googlelogo.png"
        />
      </Navbar.Brand>
      <Col xl={5} sm={8} xs={6} md={5}>
        <TextInput
          startIcon={<Search />}
          endIcon={<X height={20} width={20} />}
        />
      </Col>
    </Navbar>
  );
};

export default NavigationBar;
