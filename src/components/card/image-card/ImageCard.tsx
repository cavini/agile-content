import { Card, Col } from "react-bootstrap";
import {
  StyledCardTitle,
  StyledCardUrl,
} from "../results-card/StyledResultsCard";
import { Animal } from "../../api";

interface ImageCardProps<T> {
  item: T;
}

const ImageCard = ({ item }: ImageCardProps<Animal>) => {
  return (
    <Col>
      <Card style={{ padding: "10px", borderRadius: "4px" }}>
        <Card.Img src={item.image} />
        <Card.Body>
          <StyledCardUrl>{item.url}</StyledCardUrl>
          <StyledCardTitle>{item.title}</StyledCardTitle>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ImageCard;
