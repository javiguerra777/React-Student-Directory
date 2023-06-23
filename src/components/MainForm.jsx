import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Form from "./Form";
import Search from "./Search";
import Table from "./Table";
import people from '../services/people.json';

const Wrapper = styled.div``;
const MainForm = ()=> {
  const { register, handleSubmit } = useForm();
  //table info
  const [newSearch, setNewSearch] = useState('')
  useEffect(() => {

  }, []);
//functions for searching through table
const handleSearch = (e)=> {
  setNewSearch(e.target.value);
};

const refreshSearch = ()=> {
  setNewSearch('');
};
  return (
  <Wrapper>
      <Form
        register={register}
        handleSubmit={handleSubmit}
      />
      <Search
        newSearch={newSearch}
        handleSearch={handleSearch}
        refreshSearch={refreshSearch}
      />
      <Table />
  </Wrapper>
    );
};

export default MainForm;