import { useEffect, useState } from "react";
import { InputGroup } from "react-bootstrap";
import { StyledInputGroupText, StyledTextInput } from "./StyledTextInput.ts";
import { SearchFieldProps, Variation } from "./@types/index.ts";
import { useNavigate } from "react-router-dom";
import { getAnimal } from "../api/index.ts";

// Since this component can be used for both the navbar, as well anywhere else on the application, such as the ˜home page˜
// I added a two little props, one is called externalSearchInput and its used to override the default logic to only submit and make the search when pressing enter or the left icon, and letting the user create their own button to execute this function, if they want.
// The second one is getReturnValue, and its used so that the user can control their external button or submit logic based on the value typed in the text field.
// This makes this component extra modular, because with these two props you can add more versatility to it, allowing you to use anywhere on the applcation, customizing it to your needs.
// This way all of the configuration and logic is abstracted to its own component, not needing to pollute the code where you invoke the component.

const SearchField = ({
  startIcon,
  endIcon,
  externalSearchInput,
  getReturnValue,
}: SearchFieldProps) => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  const handlePressEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const handleExternalSearch = () => {
    search();
  };

  const handleType = (value: string) => {
    setInputValue(value);
    getReturnValue && getReturnValue(value);
  };

  useEffect(() => {
    if (externalSearchInput) {
      handleExternalSearch();
    }
  }, [externalSearchInput]);

  const search = async () => {
    getReturnValue && getReturnValue("");

    handleClear();

    const data = await getAnimal();
    navigate("/search", { state: { results: data } });

    // in the empty array below, will be the results of the api call

    // await search function etc
    // navigate to results page
  };

  const handleClear = () => {
    setInputValue("");
  };
  return (
    <InputGroup>
      {startIcon && (
        <StyledInputGroupText onClick={search} variation={Variation.left}>
          {startIcon}
        </StyledInputGroupText>
      )}

      <StyledTextInput
        onChange={(e) => handleType(e.target.value)}
        value={inputValue}
        onKeyDown={handlePressEnter}
        $leftIcon={Boolean(startIcon)}
        $rightIcon={Boolean(endIcon && inputValue)}
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
      {endIcon && inputValue && (
        <StyledInputGroupText onClick={handleClear} variation={Variation.right}>
          {endIcon}
        </StyledInputGroupText>
      )}
    </InputGroup>
  );
};

export default SearchField;
