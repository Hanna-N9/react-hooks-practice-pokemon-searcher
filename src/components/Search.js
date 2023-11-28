import React from "react";

function Search({ search, onSearchChange }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
