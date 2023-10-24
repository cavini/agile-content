import { Col, Navbar } from "react-bootstrap";
import { Grid3x3GapFill, Search, X } from "react-bootstrap-icons";
import { StyledNavigationBar } from "./StyledNavigationBar";
import useWindowWidth from "../../hooks/useWindowWidth";
import {
  cursorPointerStyle,
  userImageBaseStyle,
  userImageContainerStyle,
} from "./style";
import SearchField from "../SearchField/SearchField";
import LogoContainer from "../image-container/LogoContainer";
import { NavigationBarProps } from "./@types";

const NavigationBar = ({ currentPage }: NavigationBarProps) => {
  // I created this special hook to use whenever we have styles that need to be changed based on the viewport width. If I didnt implement a logic for this,
  // The google logo would be too big and the layout would break on smaller screens.
  const width = useWindowWidth();
  const dynamicWidth = width > 800 ? 150 : 110 * 0.8;
  const dynamicMargin = width > 800 ? "3%" : "10%";

  const imageStyles = {
    ...userImageBaseStyle,
    marginLeft: dynamicMargin,
  };

  return (
    <StyledNavigationBar>
      <Navbar.Brand href="/home">
        {currentPage === "/home" ? (
          <p style={{ fontSize: "" }}>Agile Content Frontend Test</p>
        ) : (
          <LogoContainer
            width={dynamicWidth}
            source="src/assets/images/googlelogo.png"
          />
        )}
      </Navbar.Brand>
      <Col xl={5} sm={8} xs={6} md={5}>
        {currentPage !== "/home" && (
          <SearchField
            startIcon={<Search />}
            endIcon={<X height={20} width={20} />}
          />
        )}
      </Col>

      <Col style={userImageContainerStyle}>
        <Grid3x3GapFill style={cursorPointerStyle} />
        <LogoContainer
          width={30}
          source="src/assets/images/userimage.jpeg"
          styles={imageStyles}
        />
      </Col>
    </StyledNavigationBar>
  );
};

export default NavigationBar;
