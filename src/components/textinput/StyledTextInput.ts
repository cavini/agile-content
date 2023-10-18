import styled from "styled-components";
import { Form, InputGroup } from "react-bootstrap";
import { Variation } from "./@types";

export const StyledTextInput = styled(Form.Control)<{
  $leftIcon?: boolean;
  $rightIcon?: boolean;
  $inputWithBothIcons?: boolean;
}> 
`border-right: ${(props) => props.$inputWithBothIcons || props.$rightIcon ? "none" : ""};
  border-left: ${(props) =>
    props.$inputWithBothIcons || props.$leftIcon ? "none" : ""};
  border-top-right-radius: ${(props) => (props.$rightIcon ? "" : "80px")};
  border-bottom-right-radius: ${(props) => (props.$rightIcon ? "" : "80px")};
  padding-right: ${(props) => (props.$rightIcon ? "15px" : "")};
  border-bottom-left-radius: ${(props) => (props.$leftIcon ? "" : "80px")};
  border-top-left-radius: ${(props) => (props.$leftIcon ? "" : "80px")};
  padding-left: ${(props) => (props.$leftIcon ? "15px" : "")};
  &:focus {
    border-color: #ddd;
    outline: none !important;
    outline-offset: none !important;
    box-shadow: none !important;
  };
`;



export const StyledInputGroupText = styled(InputGroup.Text)
`

  background-color: inherit;
  cursor: pointer;
  border-top-right-radius: ${(props) =>
    props.variation === Variation.right ? "80px" : ""};
  border-bottom-right-radius: ${(props) =>
    props.variation === Variation.right ? "80px" : ""};
  padding-right: ${(props) =>
    props.variation === Variation.right ? "15px" : ""};
  border-left: ${(props) =>
    props.variation === Variation.right ? "none" : ""};

  border-top-left-radius: ${(props) =>
    props.variation === Variation.left ? "80px" : ""};
  border-bottom-left-radius: ${(props) =>
    props.variation === Variation.left ? "80px" : ""};
  padding-left: ${(props) =>
    props.variation === Variation.left ? "15px" : ""};
  border-right: ${(props) =>
    props.variation === Variation.left ? "none" : ""};

  
    
`;


