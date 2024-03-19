import React, { useState } from 'react';
import './Searchbar.scss';
import { Link } from 'react-router-dom/dist';

const SearchBar = () => {
  const [value,setValue]  = useState("")
const handleChange = (e)=>{
setValue(e.target.value)
}          
       
  return (
    <>
    <div className="search-bar-container">
      <div className="input-group">
        <input type="text" style={{}} value ={value} onChange={handleChange} className="form-control" placeholder="Search occurences here" />
        <div className="input-group-append">
            <Link to={`/search/${value}`} >
          <button className="btn btn-secondary" type="button">
            <i className="fa fa-search"></i>
          </button>
            </Link>
        </div>
      </div>
    </div>
    <div>
    </div>
    </>
  );
}

export default SearchBar;
