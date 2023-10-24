import { useLocation } from "react-router-dom";
import ResultsList from "../../components/resultsList/ResultsList";
import ErrorComponent from "../../components/error/ErrorComponent";

const SearchPage = () => {
  const location = useLocation();
  
  return <> {location.state ? <ResultsList variation={"link"} data={location.state.results} /> : <ErrorComponent />}</>
};

export default SearchPage;
