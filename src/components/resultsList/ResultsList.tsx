import ResultsCard from "../card/results-card/ResultsCard";
import { Animal } from "../api";
import { useState } from "react";
import ImageCard from "../card/image-card/ImageCard";
import { Col, Modal, Row } from "react-bootstrap";
import useWindowWidth from "../../hooks/useWindowWidth";
import { ResultsListProps } from "./@types";

const ResultsList = ({ data, variation }: ResultsListProps<Animal>) => {
  const [selectedAnimal, setSelectedAnimal] = useState();

  const width = useWindowWidth();

  const isMobile = width <= 827;

  return (
    <Row>
      <Col>
        {data.map((item) => {
          return (
            <ResultsCard
              onClick={setSelectedAnimal}
              variation={variation}
              item={item}
            />
          );
        })}{" "}
      </Col>
      {selectedAnimal && !isMobile && <ImageCard item={selectedAnimal} />}

      <Modal centered show={selectedAnimal && isMobile}>
        {/* validation on the line below to avoid undefined error */}
        {selectedAnimal && isMobile && <ImageCard item={selectedAnimal} />}
      </Modal>
    </Row>
  );
};

export default ResultsList;
