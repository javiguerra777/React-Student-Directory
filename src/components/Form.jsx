import React,{useState} from 'react'
import './form.css'
const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [departement, setDepartement] = useState('');
  // const [student,setStudent] = useState([])
  // const [addformdata,setAddFormData] = useState({
  //   setFirstName:'',
  //   setLastName:'',
  //   setEmail:'',
  //   setDepartement:'',
  // })


  const  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log( handleFormSubmit);
    setFirstName('');
    setLastName('');
    setEmail('');
    setDepartement('');
    alert(
      `Hey ${firstName}! Thanks for telling us about your ${lastName}-year-old ${email} named ${departement}!`
    );
    // const feildName = e.target.getAttribute('name')
    // const feildValue = e.target.value;
    // const newFormData = {...addformdata};
    // newFormData[feildName] = feildValue;
    // setAddFormData(newFormData);

  };
  // const handleFormSubmit =(e)=>{
  //   e.preventDefault();
  //  console.log(handleFormSubmit);
    // const newStudent ={

    //   firstName:addformdata.firstName,
    //   lastName:addformdata.lastName,
    //   email:addformdata.email,
    //   departement:addformdata,departement,
    // }
    // const newStudents = [...student,newStudent];
    // setStudent(newStudents)
  // }

  

  return (
    <section >
      
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
              onChange={(e) => setFirstName(e.target.value)}
            
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
              onChange={(e) => setLastName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
            />
         
        </div>
        <div>
          <label htmlFor="department"
          >
            Departement: </label> <br></br>
            <select   onChange={(e) => setDepartement(e.target.value)} required >
              
               <option value="department">departement</option>
            <option value={departement}>Art</option>
            <option value={departement}>Software engineging</option>
            <option value={departement}>Communications</option>
            <option value={departement}>Psycology</option>     
             
            
            </select>
     
        </div>

        </div> 
        <div className="btn">
        <button  type="submit">Add a Student</button>
        </div>
       
        </fieldset>
      </form>
    </section>
  );
};

export default Form;
