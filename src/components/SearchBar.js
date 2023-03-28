

import { useState } from "react";
// import { SearchContext } from '../context/SearchContext'

function SearchBar(props) {
  let [searchTerm, setSearchTerm] = useState("");

  return (
    <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
      <input
        type="text"
        placeholder="Search Here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button> Submit</button>
    </form>
  );
}

export default SearchBar;