import './table.css';
import { useEffect, useState } from 'react';
//import { nanoid } from 'nanoid';
import { IoMdArrowDropup, IoMdArrowDropdown} from 'react-icons/io'


const Table = ({newPeople, people2, persona, showData, editData, exit, deleteButtonClick}) => {
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
  //titlecase function
  const properCase = (string) => {
    let word = string.toLowerCase().split('');
    word[0] = word[0].toUpperCase();
    //sentence.join('');
    return word.join('');
  }
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

   if(!showData){ return ( 
      <section className='data'>
            <header className='headerRow'>
              <li className="box"><button className="button" onClick={nameAscending}>First Name{!nameHidden ? (nameAscend ? down : up) : ''}</button></li>
              <li className="box"><button className="button" onClick={lNameAscending}>Last Name{!lnameHidden ? (lnameAscend ? down : up) : ''}</button></li>
              <li className="box"><button className="button" onClick={emailAscending}>Email{!emailHidden ? (emailAscend ? down : up) : ''}</button></li>
              <li className="box"><button className="button" onClick={departmentAscending}>Department{!departmentHidden ? (departmentAscend ? down : up) : ''}</button></li>
            </header>
            <main id="body">
              <code>
                
              {people2.map((person, index) => <div className="grid-container">
                {/* This ul is basically a row it contains all the li's  */}
                <ul id='item'> 
                <li>{properCase(person.firstName)}</li>
                <li>{properCase(person.lastName)}</li>
                <li><a href="#">{person.email.toLowerCase()}</a></li>
                <li id = "last">{person.department.toLowerCase()} <div><button className="edit buttons" onClick={()=> {editData(person)}}>Edit</button><button className="delete buttons" onClick={()=>{deleteButtonClick(index)}}>X</button></div></li>
                </ul>
              </div>)}
              </code>
            </main> 
      </section>
    );
   }else {
     return (
      <section className='main'>
      <header>
      <button onClick={exit}>Cancel</button>
      <h3>Current Info: {properCase(persona.firstName)} {properCase(persona.lastName)} {persona.email.toLowerCase()} {persona.department.toLowerCase()}</h3>
      </header>
      <main>
        <h3>Edit Info:</h3>
      </main>
      </section>
     );
   }
}
export default Table;
