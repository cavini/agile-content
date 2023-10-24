import { Col, Container, Row } from "react-bootstrap";
import { Search, X } from "react-bootstrap-icons";
import useWindowWidth from "../../hooks/useWindowWidth";
import { StyledButton } from "../../components/button/StyledButton";
import { useEffect, useState } from "react";
import SearchField from "../../components/SearchField/SearchField";
import LogoContainer from "../../components/image-container/LogoContainer";

const Home = () => {
  const width = useWindowWidth();
  const [returnedValue, setReturnedValue] = useState("");
  const dynamicWidth = width > 800 ? 150 : 110 * 0.8;
  const [externalSearch, setExternalSearch] = useState(false);

  useEffect(() => {
    setExternalSearch(false);
  }, []);

  return (
    <Container className="vh-100">
      <Row className="h-100 justify-content-center align-items-center">
        <Col className="text-center">
          <LogoContainer
            width={dynamicWidth}
            source="src/assets/images/googlelogo.png"
          />{" "}
          <SearchField
            getReturnValue={(value: string) => setReturnedValue(value)}
            externalSearchInput={externalSearch}
            endIcon={<X height={20} width={20} />}
            startIcon={<Search />}
          />
          <StyledButton
            disabled={!returnedValue}
            onClick={() => setExternalSearch(true)}
          >
            Buscar
          </StyledButton>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
