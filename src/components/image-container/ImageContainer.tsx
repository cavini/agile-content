import { Image } from "react-bootstrap";
import { ImageContainerProps } from "./@types";

const ImageContainer = ({ styles, source, width }: ImageContainerProps) => {
  return <Image style={styles} width={width} src={source} />;
};

export default ImageContainer;
