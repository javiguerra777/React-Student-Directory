import './form.css';
import { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai'
const Form = ({firstName, lastName, email, departement, handleFormSubmit, changeFName, changeLName, changeEmail, changeDepartment}) => {
  //toggle between disabled button
  const [hiddenEye, setHiddenEye] = useState(false);
  const hidden = <FaEyeSlash />;
  const active = <AiFillEye />
  let disabled = false;
  if(firstName === '' || lastName === '' || email === '' || departement === ''){
    disabled = true;
  };
  const toggleHidden = ()=> {
    if(hiddenEye){
      setHiddenEye(false);
    } else {
      setHiddenEye(true);
    }
  }
  return (
    <>
    <p>University Student Directory</p>
    <p>Add a new student: <button className="button" onClick={toggleHidden}>{!hiddenEye ? active : hidden}</button> </p>
    <section className={hiddenEye ? 'hidden' : ''}>
      <form onSubmit={handleFormSubmit} >
        <fieldset>
        <legend>Student Directory</legend>
       <div className="formcontainer">
          <div>
          <label htmlFor="firstName">
            Your Name: </label><br></br>
            <input
              type="text"
              id="firstName"
              required
              placeholder="first name"
              value={firstName}
              onChange={changeFName}
            />
         
        </div>
        <div>
          <label htmlFor="lastName">
          Your LastName: </label> <br></br>
            <input
              type="text"
              id="lastName"
              placeholder="last name"
              required
              value={lastName}
              onChange={changeLName}
            />
         
        </div>
        <div>
          <label htmlFor="email">
          Your email: </label> <br></br>
            <input
              type="email"
              id="email"
              required
              placeholder="abc@gdm.com"
              value={email}
              onChange={changeEmail}
            />
         
        </div>
        <div>
          <label htmlFor="department"
          >
            Departement: </label> <br></br>
            <select value={departement} onChange={changeDepartment}   required>
  
            <option value="">Select a department</option>
            <option value="art">Art</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Communications">Communications</option>
            <option value="Psychology">Psychology</option>     
             
            
            </select>
     
        </div>

        </div> 
        <div className='btn-container' >
        <button className="btn" type="submit" disabled = {disabled}>Add a Student</button>
        </div>
       
        </fieldset>
      </form>
    </section>
    </>
  );
};
export default Form;
