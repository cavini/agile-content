import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledResultsCard = styled(Card)`
  border: none;
`;

const fontSize = {
  title: "18px",
  url: "12px",
  description: "14px",
};

export const StyledCardTitle = styled(Card.Title)`
  font-size: ${fontSize.title};
`;

export const StyledCardLink = styled.a`
  font-size: ${fontSize.title};
  cursor: pointer;

  text-decoration-line: none;
`;

export const StyledCardUrl = styled(Card.Title)`
  font-size: ${fontSize.url};
  color: #aaa;
  margin: 0;
`;
