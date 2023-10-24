import { Card, Col } from "react-bootstrap";
import {
  StyledCardLink,
  StyledCardTitle,
  StyledCardUrl,
  StyledResultsCard,
} from "./StyledResultsCard";
import { Animal } from "../../api";
import { ResultsCardProps } from "./@types";

const ResultsCard = ({
  variation,
  item,
  onClick,
}: ResultsCardProps<Animal>) => {
  return (
    <Col onClick={() => onClick(item)}>
      <StyledResultsCard>
        <Card.Body>
          <StyledCardUrl>{item.url}</StyledCardUrl>
          {variation === "link" ? (
            <StyledCardLink data-testid="styled-card-link">
              {item.title}
            </StyledCardLink>
          ) : (
            <StyledCardTitle>{item.title}</StyledCardTitle>
          )}

          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </StyledResultsCard>
    </Col>
  );
};

export default ResultsCard;
