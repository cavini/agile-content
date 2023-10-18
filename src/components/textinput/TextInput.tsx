import React, { CSSProperties, ReactNode } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { TextInputStyle } from "./style.ts";

interface TextInputProps {
  overrideIconContainerStyle?: CSSProperties;
  overrideInputStyle?: CSSProperties;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const getCorrectStyling = (leftIcon, rightIcon) => {
  switch ((leftIcon, rightIcon)) {
    case leftIcon && rightIcon:
      return TextInputStyle.inputWithBothIcons;
      break;
    case leftIcon:
      return TextInputStyle.inputWithStartIcon;
    case rightIcon:
      return TextInputStyle.inputWithEndIcon;
    default:
      break;
  }
};

const TextInput = ({ startIcon, endIcon }: TextInputProps) => {
  return (
    <InputGroup>
      {startIcon && (
        <InputGroup.Text
          style={{
            ...TextInputStyle.basicStyle,
            ...TextInputStyle.iconPosition.left,
          }}
          id="basic-addon1"
        >
          {startIcon}
        </InputGroup.Text>
      )}

      <Form.Control
        style={getCorrectStyling(startIcon, endIcon)}
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
      {endIcon && (
        <InputGroup.Text
          style={{
            ...TextInputStyle.basicStyle,
            ...TextInputStyle.iconPosition.right,
          }}
          id="basic-addon1"
        >
          {endIcon}
        </InputGroup.Text>
      )}
    </InputGroup>
  );
};

export default TextInput;
