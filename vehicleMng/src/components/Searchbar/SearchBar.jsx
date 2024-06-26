import React, { useState } from 'react';
import './Searchbar.scss';
import { Link } from 'react-router-dom';

const SearchBar = ({ onFocus, onBlur }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="input-group">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={onFocus} // Call onFocus prop when search bar is focused
          onBlur={onBlur}   // Call onBlur prop when search bar loses focus
          className="form-control"
          placeholder="Search occurrences here"
        />
        <div className="input-group-append">
          <Link to={`/search/${value}`}>
            <button className="btn btn-secondary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
