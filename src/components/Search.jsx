import { GrRefresh } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

const Wrapper = styled.div`
margin: 10px 0 10px 15px;
  .search-container {
    border: solid 1px black;
    border-radius: 10px;
    display: flex;
    margin: 5px 0 0 5px;
    height: 40px;
    width: 200px;
    font-size: 16px;
    .search-icon {
      background: gray;
      border-radius: 10px 0 0 10px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    input {
      border: none;
      border-radius: 0 10px 10px 0;
    }
  }
  .active {
    background: green;
  }
  .disabled {
    background: lightgray;
  }
`;
const Search = ({ newSearch, handleSearch, refreshSearch }) => {
  return (
    <Wrapper>
    <label htmlFor="search">
        <strong>View/Search students: </strong>
        <button
          className={newSearch ? 'active' : 'disabled'}
          onClick={refreshSearch}
          disabled={!newSearch}>
          <GrRefresh />
        </button>
      </label>
      <br></br>
      <div className="search-container">
        <div className="search-icon">
          <BsSearch />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          className="searchBtn"
          placeholder="search students"
          value={newSearch}
          onChange={handleSearch}
        />
      </div>
  </Wrapper>
  )
}
export default Search;
