import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; 

const SearchBar = ({ searchQuery, handleInputChange }) => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="input-group" style={{ width: "90%",border:"2px solid #6453C2",borderRadius:"8px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search Books"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <span className="input-group-text" style={{ backgroundColor: "#6453C2", color: "white" }}>
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
