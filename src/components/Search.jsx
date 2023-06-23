import { GrRefresh } from 'react-icons/gr';
import styled from 'styled-components';

const Wrapper = styled.div`
  .serachbtn {
    margin-left: 10px;
    width: 20%;
    margin-top: 20px;
    height: 25px;
  }
`;
const Search = ({newSearch, handleSearch, refreshSearch}) => {
  return (
    <Wrapper>
    <label htmlFor="search">
        <strong>View/Search students: </strong>
        <button
          className="button"
          onClick={refreshSearch}
          disabled={!newSearch}>
          <GrRefresh />
        </button>
      </label>
      <br></br>
      <input
        type="text"
        id="search"
        placeholder="search students"
        value={newSearch}
        onChange={handleSearch}
      />
  </Wrapper>
  )
}
export default Search;
