import { Image } from "react-bootstrap";
import { LogoContainerProps } from "./@types";

const LogoContainer = ({ styles, source, width }: LogoContainerProps) => {
  return <Image style={styles} width={width} src={source} />;
};

export default LogoContainer;
