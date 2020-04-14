import React from 'react';
import './searchbox.css';

const SearchBox = ({placeholder, handleChange})=>{
    return(
        <div>
            <input   
            className="form-control mb-3"         
            type="search"
            placeholder = {placeholder}
            onChange={handleChange} 
            />
        </div>
    )
}


export default SearchBox;