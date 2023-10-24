import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Animal } from "../../../api";
import ResultsCard from "../ResultsCard";
import "@testing-library/jest-dom";
import { v4 as uuidv4 } from "uuid";

describe("ResultsCard Component", () => {
  const mockAnimal: Animal = {
    id: uuidv4(),
    url: "https://example.com/1",
    title: "Sample Animal",
    description: "This is a sample animal description.",
    image: "sample.jpg",
    type: "sample",
  };

  it("renders ResultsCard with correct url prop", () => {
    render(
      <ResultsCard variation="link" item={mockAnimal} onClick={() => {}} />
    );
    const urlElement = screen.getByText("https://example.com/1");
    expect(urlElement).toBeInTheDocument();
  });

  it("renders ResultsCard with correct title prop", () => {
    render(
      <ResultsCard variation="link" item={mockAnimal} onClick={() => {}} />
    );
    const titleElement = screen.getByText("Sample Animal");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders ResultsCard with correct description prop", () => {
    render(
      <ResultsCard variation="link" item={mockAnimal} onClick={() => {}} />
    );
    const descriptionElement = screen.getByText(
      "This is a sample animal description."
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders ResultsCard with link variation", () => {
    render(
      <ResultsCard variation="link" item={mockAnimal} onClick={() => {}} />
    );
    const linkElement = screen.getByTestId("styled-card-link");
    expect(linkElement).toBeInTheDocument();
  });

  it("calls onClick function with the correct item when clicked", () => {
    const onClickMock = jest.fn();
    render(
      <ResultsCard variation="link" item={mockAnimal} onClick={onClickMock} />
    );
    const linkElement = screen.getByTestId("styled-card-link");
    linkElement.click();
    expect(onClickMock).toHaveBeenCalledWith(mockAnimal);
  });
});
