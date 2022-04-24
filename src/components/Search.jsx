const Search = ({newSearch, handleSearch}) => {
  
  return (
    <div>
    <label htmlFor="search">
    View/Search students: </label> <br></br>
      <input
        type="text"
        id="search"
        placeholder="search students"
        value={newSearch}
        onChange={handleSearch}
      />
  </div>
  )
}

export default Search