import { useState, useEffect } from "react";
import Form from "./Form";
import Search from "./Search";
import Table from "./Table";
import people from '../services/people.json';
import './form.css';
const MainForm = ()=> {
    //test
    const [showData, setShowData] = useState(false);
    const [persona, setPersona] = useState('');
    const editData = (person) => {
      setShowData(true);
      setPersona(person);
    }
    const exit = ()=> {
      setShowData(false);
    }
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [departement, setDepartement] = useState('');
  const [newPeople, setNewPeople] = useState(JSON.parse(localStorage.getItem('people')) ||[]);
  const [newSearch, setNewSearch] = useState('')
  const [people2, setPeople2] = useState([...people, ...newPeople]);
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
    setNewSearch('');
    setShowData(false);
  };
  //delete button
  const deleteButtonClick = (index)=> {
    const newestPeople = people2 && people2.filter((element, i) => i !== index);
    setPeople2(newestPeople);
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
const refreshSearch = ()=> {
  setNewSearch('');
};
//fixes another bug when adding new people
useEffect(()=> {
  setPeople2([...people, ...newPeople]);
}, [newPeople])
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
  <div id="container">
  <Form firstName={firstName} lastName={lastName} email={email} departement = {departement} handleFormSubmit={handleFormSubmit} changeFName = {changeFName} changeLName={changeLName} changeEmail={changeEmail} changeDepartment={changeDepartment} />
  <Search newSearch={newSearch} handleSearch={handleSearch} refreshSearch={refreshSearch} />
  <Table newPeople={newPeople} people2={search(people2)} persona ={persona} showData={showData} editData={editData} exit={exit} deleteButtonClick={deleteButtonClick}/>
  </div>
    );
};

export default MainForm;