import { useState, useEffect } from "react";
import Form from "./Form";
import Search from "./Search";
import Table from "./Table";
import people from '../services/people.json'
const MainForm = ()=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [departement, setDepartement] = useState('');
  const [newPeople, setNewPeople] = useState(JSON.parse(localStorage.getItem('people')) || []);
  const [newSearch, setNewSearch] = useState('')
  const people2 = [ ...people, ...newPeople ]
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setNewPeople([...newPeople, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      department: departement
    }]);
    setFirstName('');
    setLastName('');
    setEmail('');
    setDepartement('');
  };
  //handle changes in form
const changeFName = (e) => {
  setFirstName(e.target.value);
};
const changeLName = (e) => {
  setLastName(e.target.value);
};
const changeEmail = (e) => {
  setEmail(e.target.value);
};
const changeDepartment = (e) => {
  setDepartement(e.target.value);
};
//functions for searching through table
const handleSearch = (e)=> {
  setNewSearch(e.target.value);
};

const search = (data) => {
  if(newSearch === ''){
    return data;
  }else {
  return data.filter((value)=>{
    if(value.firstName.toLowerCase().includes(newSearch)||
    value.lastName.toLowerCase().includes(newSearch.toLowerCase())|| 
    value.email.toLowerCase().includes(newSearch.toLowerCase())||
    value.department.toLowerCase().includes(newSearch.toLowerCase())){
      return value;
      }
    })
  }
};
//grab data from localstorage 
useEffect(()=> {
  const retrievePeople = JSON.parse(localStorage.getItem('people'));
  if(retrievePeople){
    setNewPeople(retrievePeople);
  }
}, []);
//how to store to localstorage
useEffect(()=> {
  localStorage.setItem('people', JSON.stringify(newPeople));
},[newPeople]);

return (
  <>
  <Form firstName={firstName} lastName={lastName} email={email} departement = {departement} handleFormSubmit={handleFormSubmit} changeFName = {changeFName} changeLName={changeLName} changeEmail={changeEmail} changeDepartment={changeDepartment} />
  <Search newSearch={newSearch} handleSearch={handleSearch} />
  <Table newPeople={newPeople} people2={search(people2)} />
  </>
  );
};

export default MainForm;