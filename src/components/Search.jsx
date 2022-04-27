import { GrRefresh } from 'react-icons/gr';
const Search = ({newSearch, handleSearch, refreshSearch}) => {
  let disabled;
  if(newSearch === ''){
    disabled = true;
  } else {
    disabled = false;
  }
  return (
    <div>
    <label htmlFor="search">
    <strong>View/Search students: </strong> <button className="button" onClick={refreshSearch} disabled ={disabled}><GrRefresh /></button></label> <br></br>
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