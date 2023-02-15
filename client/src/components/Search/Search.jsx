import React from "react";
import { useState } from "react";
const Search = (props)=> {
    const [search, setSearch] = useState("");
    const filter = event => {
       setSearch(event.target.value);
       props.filterItems(search)
     };
     return (
        <div >
            <input
            type="text"
            placeholder='search by name'
            onChange={filter}
            />
        </div>
     );
   }
export default Search