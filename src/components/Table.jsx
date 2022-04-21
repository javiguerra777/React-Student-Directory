import './table.css';
import { useEffect, useState } from 'react';
import people from '../services/people.json';
import { nanoid } from 'nanoid';


const Table = ({newPeople}) => {
  const [nameAscend, setNameAscend] = useState(false);
  const [lnameAscend, setLNameAscend] = useState(false);
  const [emailAscend, setEmailAscend] = useState(false);
  const [departmentAscend, setDepartmentAscend] = useState(false);
  const people2 = [ ...people, ...newPeople ];
  const [data, setData] = useState(people2.map(({firstName, lastName, email, department}) => 
  <>
  <div id="grid-container">
    <li className='item' key={nanoid()}>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li> 
    <li className='item' key={nanoid()}>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li> 
    <li className='item' key={nanoid()}>{email.toLowerCase()}</li> 
    <li className='item' key={nanoid()}>{department}</li>
  </div>
  </>));
  //change ascending and descending
  //ascend and descend by first name
  const nameAscending = ()=> {
  setLNameAscend(false);
  setEmailAscend(false);
  setDepartmentAscend(false); 

    if(!nameAscend){
      setNameAscend(true);
      setData(people2.sort((a,b)=> a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1).map(({firstName, lastName, email, department}) => 
      <>
      <div id="grid-container">
        <li className='item' key={nanoid()}>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{email.toLowerCase()}</li> 
        <li className='item' key={nanoid()}>{department}</li>
      </div>
      </>));
    }else{
      setNameAscend(false);
      setData(people2.sort((a,b)=> a.firstName.toLowerCase() < b.firstName.toLowerCase() ? 1 : -1).map(({firstName, lastName, email, department}) => 
      <>
      <div id="grid-container">
        <li className='item' key={nanoid()}>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{email.toLowerCase()}</li> 
        <li className='item' key={nanoid()}>{department}</li>
      </div>
      </>));
    }
  };
  //ascend and descend by last name
  const lNameAscending = ()=> {
    setNameAscend(false);
    setEmailAscend(false);
    setDepartmentAscend(false); 
    if(!lnameAscend){
      setLNameAscend(true);
      setData(people2.sort((a,b)=> a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1).map(({firstName, lastName, email, department}) => 
      <>
      <div id="grid-container">
        <li className='item' key={nanoid()}>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{email.toLowerCase()}</li> 
        <li className='item' key={nanoid()}>{department}</li>
      </div>
      </>));
    }else{
      setLNameAscend(false);
      setData(people2.sort((a,b)=> a.lastName.toLowerCase() < b.lastName.toLowerCase() ? 1 : -1).map(({firstName, lastName, email, department}) => 
      <>
      <div id="grid-container">
        <li className='item' key={nanoid()}>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{email.toLowerCase()}</li> 
        <li className='item' key={nanoid()}>{department}</li>
      </div>
      </>));
    }
  };
  const emailAscending = ()=> {
    setNameAscend(false);
    setLNameAscend(false);
    setDepartmentAscend(false); 
    if(!emailAscend){
      setEmailAscend(true);
      setData(people2.sort((a,b)=> a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1).map(({firstName, lastName, email, department}) => 
      <>
      <div id="grid-container">
        <li className='item' key={nanoid()}>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{email.toLowerCase()}</li> 
        <li className='item' key={nanoid()}>{department}</li>
      </div>
      </>));
    }else{
      setEmailAscend(false);
      setData(people2.sort((a,b)=> a.email.toLowerCase() < b.email.toLowerCase() ? 1 : -1).map(({firstName, lastName, email, department}) => 
      <>
      <div id="grid-container">
        <li className='item' key={nanoid()}>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{email.toLowerCase()}</li> 
        <li className='item' key={nanoid()}>{department}</li>
      </div>
      </>));
    }
  };
  const departmentAscending = ()=> {
    setNameAscend(false);
    setLNameAscend(false);
    setEmailAscend(false);
    if(!departmentAscend){
      setDepartmentAscend(true);
      setData(people2.sort((a,b)=> a.department.toLowerCase() > b.department.toLowerCase() ? 1 : -1).map(({firstName, lastName, email, department}) => 
      <>
      <div id="grid-container">
        <li className='item' key={nanoid()}>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{email.toLowerCase()}</li> 
        <li className='item' key={nanoid()}>{department}</li>
      </div>
      </>));
    }else{
      setDepartmentAscend(false);
      setData(people2.sort((a,b)=> a.department.toLowerCase() < b.department.toLowerCase() ? 1 : -1).map(({firstName, lastName, email, department}) => 
      <>
      <div id="grid-container">
        <li className='item' key={nanoid()}>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li> 
        <li className='item' key={nanoid()}>{email.toLowerCase()}</li> 
        <li className='item' key={nanoid()}>{department}</li>
      </div>
      </>));
    }
  };
  //fixes bugs in the code when adding new user
  useEffect(()=> {
    setNameAscend(false);
    setLNameAscend(false);
    setEmailAscend(false);
    setDepartmentAscend(false); 
    setData(people2.map(({firstName, lastName, email, department}) => 
    <>
    <div id="grid-container">
      <li className='item' key={nanoid()}>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li> 
      <li className='item' key={nanoid()}>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li> 
      <li className='item' key={nanoid()}>{email.toLowerCase()}</li> 
      <li className='item' key={nanoid()}>{department}</li>
    </div>
    </>));
  }, [newPeople])
  return (
    <>
    <section className='data'>
          <header id='headerRow'>
            <div className='box'><h5>First Name <button className="change" onClick={nameAscending}>{nameAscend ? 'descend' : 'ascend'}</button></h5> </div>
            <div className='box'><h5>Last Name <button className="change" onClick={lNameAscending}>{lnameAscend ? 'descend' : 'ascend'}</button></h5></div>
            <div className='box'><h5>Email <button className="change" onClick={emailAscending}>{emailAscend ? 'descend' : 'ascend'}</button></h5></div>
            <div className='box'><h5>Department<button className="change" onClick={departmentAscending}>{departmentAscend ? 'descend' : 'ascend'}</button></h5></div>
          </header>
          <main id="body">
            <code>
            {data}
            </code>
          </main> 
    </section>
    </>
  );
};
export default Table;
