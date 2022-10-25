import React from 'react'

const Search = ({ input, onChange }) => {
  return (
        <div>Search: <input vlaue={input} type="text" onChange={onChange}/></div>
  )
}

export default Search