import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaEyeSlash } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
form {
  align-self: center;
  max-width: 1200px;
}
.title {
  font-size: 30px;
  margin-top: 10px;
  text-decoration: none;
  color: orange;
}
.title:hover {
  color: blue;
  text-decoration: underline;
}
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
  .btn-container {
    margin-top: 10px;
    text-align: center;
    button {
      height: 35px;
      padding: 0 30px;
      color: white;
      background: dodgerblue;
      border-radius: 5px;
    }
    button:hover {
      background: lightblue;
    }
  }
  .error {
    border: red solid 1px;
  }
  .red {
    color: red;
  }
  .form-container {
    display: flex;
    flex-wrap: wrap;
    div {
      margin-right: 20px;
      input {
        height: 30px;
        width: 200px;
      }
      select{
        height: 30px;
        width: 200px;
      }
    }
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
    <Link href="/dashboard" className="title bold">University Directory Dashboard</Link>
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
        <div className="form-container">
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
