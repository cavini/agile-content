import { useLocation } from "react-router-dom";
import ResultsList from "../../components/resultsList/ResultsList";

const Search = () => {
  const location = useLocation();
  return <ResultsList variation={"link"} data={location.state.results} />;
};

export default Search;
