import React from "react";

const Search = ({ input, onChange }) => {
  // If there are ten or fewer countries, but more than one, then all countries matching the query are shown:

  return (
    <div>
      Search: <input vlaue={input} type="text" onChange={onChange} />
    </div>
  );
};

export default Search;
