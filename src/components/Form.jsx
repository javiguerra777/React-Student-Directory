import { useState } from 'react';
import styled from 'styled-components';
import { FaEyeSlash } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

const Wrapper = styled.div`
  .bold {
    font-weight: 800;
  }
  fieldset {
    background-color: #e2f9e1;
  }
  legend {
    background-color: whitesmoke;
    border-radius: 15px;
  }
  .formcontainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .btn-container {
    text-align: center;
  }
  .error {
    border: red solid 1px;
  }
  .red {
    color: red;
  }
  #container {
    background-color: whitesmoke;
    border: 3px lightskyblue solid;
    border-radius: 5px;
    display: flex;
    position: relative;
    top: 15px;
    flex-direction: column;
    margin-left: 3%;
    width: 90%;
    padding: 0 8px 15px 8px;
  }
`;

const Form = ({ register, handleSubmit, onSubmit }) => {
  //toggle between disabled button
  const [hiddenEye, setHiddenEye] = useState(false);
  const hidden = <FaEyeSlash />;
  const active = <AiFillEye />;
  const toggleHidden = ()=> {
    setHiddenEye((prev) => !prev);
  }
  return (
    <Wrapper>
    <h1 className="bold">University Student Directory</h1>
        <p className="bold">Add a New Student:
          <button
            className="button"
            onClick={toggleHidden}>
            {hiddenEye ? active : hidden}
          </button>
        </p>
      {!hiddenEye && (
        <form onSubmit={handleSubmit(onSubmit)} >
          <fieldset>
          <legend>Student Directory</legend>
        <div className="formcontainer">
            <div>
            <label htmlFor="firstName">
                  Your Name:
                </label>
                <br></br>
              <input
                type="text"
                  name="firstName"
                  id="firstName"
                placeholder="First Name"
                  {...register('firstName')}
              />
          </div>
          <div>
            <label htmlFor="lastName">
                  Your Last Name:
                </label>
                <br></br>
              <input
                  type="text"
                  id="lastName"
                name="lastName"
                  placeholder="Last Name"
                  {...register('lastName')}
              />

          </div>
          <div>
            <label htmlFor="email">
                  Your Email:
                </label>
                <br></br>
              <input
                type="email"
                  name="email"
                  id="email"
                placeholder="fakeemail@gmail.com"
                {...register('email')}
              />
          </div>
          <div>
            <label htmlFor="department">
              Department: </label> <br></br>
              <select {...register('department')}>
              <option value="">Select a department</option>
              <option value="art">Art</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Communications">Communications</option>
              <option value="Psychology">Psychology</option>
              </select>
          </div>
          </div> 
          <div className='btn-container' >
              <button
                className="btn"
                type="submit"
              >
                Add a Student
              </button>
          </div>
          </fieldset>
        </form>
      )}
    </Wrapper>
  );
};
export default Form;
