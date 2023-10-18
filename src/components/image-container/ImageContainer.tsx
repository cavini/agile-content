import React, { CSSProperties } from "react";
import { Image } from "react-bootstrap";

interface Styling {
  styles: CSSProperties;
  width: number;
}

interface ImageContainerProps {
  styling: Styling;
  source: string;
}

const ImageContainer = ({ styling, source }: ImageContainerProps) => {
  return <Image style={styling.styles} width={styling.width} src={source} />;
};

export default ImageContainer;
