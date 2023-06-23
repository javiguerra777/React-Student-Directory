'use client'
import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import Form from "./Form";
import Search from "./Search";
import Table from "./Table";
import peopleData from '../services/people.json';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;
const Main = () => {
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
  const removeStudent = (id) => {
    setPeople((prev) => prev.filter((user) => user.id !== id));
  }
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
          removeStudent={removeStudent}
        />
      ) : (
          <p>No students in database</p>
      )}
  </Wrapper>
    );
};

export default Main;