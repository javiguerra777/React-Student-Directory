import './table.css';
import { useEffect, useState } from 'react';
//import { nanoid } from 'nanoid';
import { IoMdArrowDropup, IoMdArrowDropdown} from 'react-icons/io'


const Table = ({newPeople, people2}) => {
  const up = <IoMdArrowDropup />
  const down = <IoMdArrowDropdown />
   
  //change between ascend and descending
  const [nameAscend, setNameAscend] = useState(false);
  const [lnameAscend, setLNameAscend] = useState(false);
  const [emailAscend, setEmailAscend] = useState(false);
  const [departmentAscend, setDepartmentAscend] = useState(false);
  //change between hidden and active buttons
  const [nameHidden, setNameHidden] = useState(true);
  const [lnameHidden, setLNameHidden] = useState(true);
  const [emailHidden, setEmailHidden] = useState(true);
  const [departmentHidden, setDepartmentHidden] = useState(true);
  //change ascending and descending
  //ascend and descend by first name
  const nameAscending = ()=> {
    setNameHidden(false);
    setLNameHidden(true);
    setEmailHidden(true);
    setDepartmentHidden(true);

    setLNameAscend(false);
    setEmailAscend(false);
    setDepartmentAscend(false); 

    if(!nameAscend){
      setNameAscend(true);
      return people2.sort((a,b)=> a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1);
    }else{
      setNameAscend(false);
      return people2.sort((a,b)=> a.firstName.toLowerCase() < b.firstName.toLowerCase() ? 1 : -1);
    }
  };
  //ascend and descend by last name
  const lNameAscending = ()=> {
    setNameHidden(true);
    setLNameHidden(false);
    setEmailHidden(true);
    setDepartmentHidden(true);

    setNameAscend(false);
    setEmailAscend(false);
    setDepartmentAscend(false); 
    if(!lnameAscend){
      setLNameAscend(true);
      return people2.sort((a,b)=> a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1 );
    }else{
      setLNameAscend(false);
      return people2.sort((a,b)=> a.lastName.toLowerCase() < b.lastName.toLowerCase() ? 1 : -1);
    }
  };
  //ascend and descend by email
  const emailAscending = ()=> {
    setNameHidden(true);
    setLNameHidden(true);
    setEmailHidden(false);
    setDepartmentHidden(true);

    setNameAscend(false);
    setLNameAscend(false);
    setDepartmentAscend(false); 
    if(!emailAscend){
      setEmailAscend(true);
      return people2.sort((a,b)=> a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1);
    }else{
      setEmailAscend(false);
      return people2.sort((a,b)=> a.email.toLowerCase() < b.email.toLowerCase() ? 1 : -1);
    }
  };
  //ascend and descend by department
  const departmentAscending = ()=> {
    setNameHidden(true);
    setLNameHidden(true);
    setEmailHidden(true);
    setDepartmentHidden(false);

    setNameAscend(false);
    setLNameAscend(false);
    setEmailAscend(false);
    if(!departmentAscend){
      setDepartmentAscend(true);
      people2.sort((a,b)=> a.department.toLowerCase() > b.department.toLowerCase() ? 1 : -1);
    }else{
      setDepartmentAscend(false);
      return people2.sort((a,b)=> a.department.toLowerCase() < b.department.toLowerCase() ? 1 : -1);
    }
  };
  //fixes bugs in the code when adding new user
  useEffect(()=> {
    setNameAscend(false);
    setLNameAscend(false);
    setEmailAscend(false);
    setDepartmentAscend(false); 

    setNameHidden(true);
    setLNameHidden(true);
    setEmailHidden(true);
    setDepartmentHidden(true);
   
  }, [newPeople]);
  return (
    <>
    <section className='data'>
          <header className='headerRow'>
            <li className="box"><button className="button" onClick={nameAscending}>First Name{!nameHidden ? (nameAscend ? down : up) : ''}</button></li>
            <li className="box"><button className="button" onClick={lNameAscending}>Last Name{!lnameHidden ? (lnameAscend ? down : up) : ''}</button></li>
            <li className="box"><button className="button" onClick={emailAscending}>Email{!emailHidden ? (emailAscend ? down : up) : ''}</button></li>
            <li className="box"><button className="button" onClick={departmentAscending}>Department{!departmentHidden ? (departmentAscend ? down : up) : ''}</button></li>
          </header>
          <main id="body">
            <code>
              
            {people2.map(({firstName, lastName, email, department}) => <div className="grid-container">
              {/* This ul is basically a row it contains all the li's  */}
              <ul id='item'> 
              <li>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li>
              <li>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li>
              <li>{email.toLowerCase()}</li>
              <li id = "last">{department.toLowerCase()} <div><button className="edit buttons">Edit</button><button className="delete buttons">X</button></div></li>
              </ul>
            </div>)}
            </code>
          </main> 
    </section>
    </>
  );
};
export default Table;
