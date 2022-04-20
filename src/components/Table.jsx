import './table.css';
import { useState } from 'react';
import people from '../services/people.json';
import { nanoid } from 'nanoid';
const Table = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [nameAscend, setNameAscend] = useState(false);
  const [mypeeps, setMyPeeps] = useState([]);
  const people2 = [...people, ...mypeeps];
  const submitForm = (e)=> {
    e.preventDefault();
    setMyPeeps(state => state.concat({
      firstName: firstName,
      lastName: lastName,
      email: email,
      department: department
    }));
    setFirstName('');
    setLastName('');
    setEmail('');
    setDepartment('');
  }
  const nameAscending = ()=> {
    if(!nameAscend){
      setNameAscend(true);
    }else {
      setNameAscend(false);
    }
  };
  console.log('my peeps array:', mypeeps);
  return (
    <>
    <section>
      <form onSubmit={submitForm}>
        <label htmlFor='firstName'>
          Enter first name:
          <input
          type="text"
          id="firstName"
          placeholder="Mike"
          value={firstName}
          onChange={(e)=> setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor='lastName'>
          Enter last name:
          <input
          type="text"
          id="lastName"
          placeholder="Jordan"
          value={lastName}
          onChange={(e)=> setLastName(e.target.value)}
          />
        </label>
        <label htmlFor='Email'>
          Enter Email:
          <input
          type="text"
          id="email"
          placeholder="MJ23@u.pacific.edu"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='department'>
          Enter Department:
          <input
          type="text"
          id="department"
          placeholder="Communications"
          value={department}
          onChange={(e)=> setDepartment(e.target.value)}
          />
        </label>
        <button type="submit">Submit data!</button>
      </form>
    </section>
    <section className='data'>
          <header id='headerRow'>
            <div className='box'><h5>First Name <button className="change" onClick={nameAscending}>{nameAscend ? 'descend' : 'ascend'}</button></h5> </div>
            <div className='box'><h5>Last Name</h5></div>
            <div className='box'><h5>Email</h5></div>
            <div className='box'><h5>Department</h5></div>
          </header>
          <main id="body">
            <code>
            {people2.map(({firstName, lastName, email, department}) => 
  <>
  <div id="grid-container">
    <li className='item' key={nanoid()}>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li> 
    <li className='item' key={nanoid()}>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li> 
    <li className='item' key={nanoid()}>{email.toLowerCase()}</li> 
    <li className='item' key={nanoid()}>{department}</li>
  </div>
  </>
  )}
            </code>
          </main> 
    </section>
    </>
  );
};
export default Table;