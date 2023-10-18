import {   useState } from "react";
import {   InputGroup } from "react-bootstrap";
import { StyledInputGroupText, StyledTextInput } from "./StyledTextInput.ts";
import { TextInputProps, Variation } from "./@types/index.ts";





const TextInput = ({ startIcon, endIcon,  }: TextInputProps) => {

  const [inputValue, setInputValue] = useState('') 
  const handlePressEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      search(inputValue)
    }
  };

  const search = (value: string) => {
    console.log(value)
    // await search function etc
    // navigate to results page
  }

  const handleClear = () => {
    setInputValue('')
    console.log(inputValue)
    console.log('delete')
  }
  return (
    <InputGroup
    >
      {startIcon && (
         <StyledInputGroupText onClick={() => search(inputValue)} variation={Variation.left}>
         {startIcon}
   </StyledInputGroupText>
      
      )}



      <StyledTextInput
      onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={handlePressEnter}
        $leftIcon={Boolean(startIcon)}
        $rightIcon={Boolean(endIcon)}
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
      {endIcon && (
        <StyledInputGroupText onClick={handleClear} variation={Variation.right}>
              {endIcon}
        </StyledInputGroupText>
        
      )}
    </InputGroup>
  );
};

export default TextInput;
