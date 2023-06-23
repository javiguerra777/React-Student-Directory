import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import Form from "./Form";
import Search from "./Search";
import Table from "./Table";
import peopleData from '../services/people.json';

const Wrapper = styled.div`
  width: 100%;
`;
const MainForm = () => {
  const [people, setPeople] = useState([]);
  const { register, handleSubmit } = useForm();
  //table info
  const [newSearch, setNewSearch] = useState('')
  useEffect(() => {
    setPeople(peopleData);
  }, []);
  const addStudent = (data) => {
    setPeople((prev) => [...prev, data]);
  };
  const onSubmit = (data) => {
    console.log(data);
    const payload = {
      ...data,
      id: nanoid(),
      major: '',
    };
    addStudent(payload);
  }
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
        onSubmit={onSubmit}
      />
      <Search
        newSearch={newSearch}
        handleSearch={handleSearch}
        refreshSearch={refreshSearch}
      />
      {people.length > 0 ? (
        <Table
          data={people}
          searchTerm={newSearch}
        />
      ) : (
          <p>can a lot</p>
      )}
  </Wrapper>
    );
};

export default MainForm;