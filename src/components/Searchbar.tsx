import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../components/SearchContext.tsx";

const Searchbar = () => {
  const { search, setSearch } = useContext(SearchContext);

  const getInputValue = (event) => {
    // show the user input value to console
    setSearch(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={getInputValue} required></input>
      <Link to="/search">
        <button>Research card</button>
      </Link>
    </div>
  );
};

export default Searchbar;
