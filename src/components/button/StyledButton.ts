import { Button } from "react-bootstrap";
import styled from "styled-components";

// This file has the command disabling the any type because of some unknown bug
// Styled components does not handle react-bootstrap types well.
// If you remove the any type on the component below, you will see what I mean.
// There have been hundreds of questions and prs open about this issue, and so far
// they have not been able to fix it.
// example: https://github.com/pmndrs/drei/issues/704
// I would NEVER use an any type on my applications, however, dealing with third party code has its downsides
// and this is one of them. There is simply no reasonable solution other than disabling typescript for this case specifically.
// because they were not able to provide stable and simplified types for their code.
// this results in the build error "Expression produces a union type that is too complex to represent."

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledButton: any = styled(Button)`
  margin-top: 3%;
  &:disabled {
    background-color: #f7f8f9;
    border: none;
    border-radius: 3px;
    color: #bbb;
  }
`;
