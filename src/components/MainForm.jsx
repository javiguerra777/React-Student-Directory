import { useState, useEffect } from "react";
import Form from "./Form";
import Search from "./Search";
import Table from "./Table";
const MainForm = ()=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [departement, setDepartement] = useState('');
  const [newPeople, setNewPeople] = useState(JSON.parse(localStorage.getItem('people')) || []);

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
  <Search />
  <Table newPeople={newPeople} />
  </>
  );
};

export default MainForm;