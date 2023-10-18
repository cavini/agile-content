import {
  Col,
  Navbar,
} from "react-bootstrap";
import ImageContainer from "../image-container/ImageContainer";
import TextInput from "../textinput/TextInput";
import { Grid3x3GapFill, Search, X } from "react-bootstrap-icons";
import { StyledNavigationBar } from "./StyledNavigationBar";
import useWindowWidth from "../../hooks/useWindowWidth";
import {  cursorPointerStyle, userImageBaseStyle, userImageContainerStyle } from "./style";

const NavigationBar = () => {
  // I created this special hook to use whenever we have styles that need to be changed based on the viewport width. If I didnt implement a logic for this,
  // The google logo would be too big and the layout would break on smaller screens.
  const width = useWindowWidth()
  const dynamicWidth = width > 800 ? 150 : 110 * 0.8;
  const dynamicMargin = width > 800 ? '3%' : '10%';
  
  const imageStyles = {
    ...userImageBaseStyle,
    marginLeft: dynamicMargin
  }

 

  return (
    <StyledNavigationBar>
      <Navbar.Brand href="#home">
        <ImageContainer width={dynamicWidth} source="src/assets/images/googlelogo.png" />
      </Navbar.Brand>
      <Col xl={5} sm={8} xs={6} md={5}>
        <TextInput
          startIcon={<Search />}
          endIcon={<X height={20} width={20} />}
        />
      </Col>

      <Col style={userImageContainerStyle}>
        <Grid3x3GapFill style={cursorPointerStyle} />
        <ImageContainer width={30} source="src/assets/images/userimage.jpeg"  styles={imageStyles} />
      </Col>
   
    </StyledNavigationBar>
  );
};

export default NavigationBar;
