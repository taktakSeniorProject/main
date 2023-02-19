import React from "react";
import { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const filter = (event) => {
    const searchText = event.target.value;
    setSearch(searchText);
    props.filterItems(searchText);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="search by name"
        onChange={filter}
      />
    </div>
  );
};

export default Search;