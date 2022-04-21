import React, {useState}from 'react'

const Search = () => {

  const [newSearch, setNewSearch] = useState('')
  return (
    <form >
    <label htmlFor="search">
    View/Search students: </label> <br></br>
      <input
        type="text"
        id="search"
        placeholder="search students"
        value={newSearch}
        onChange={(e) => setNewSearch(e.target.value)}
      />
   
  </form>
  )
}

export default Search