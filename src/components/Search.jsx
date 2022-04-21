import React, {useState}from 'react'
import JsonData from'../services/people.json'

const Search = ({newPeople}) => {
  const newdata = [...JsonData,...newPeople]
  //  const newPeople ={newPeople}
  const [newSearch, setNewSearch] = useState('')
  
  return (
    <div >
    <label htmlFor="search">
    View/Search students: </label> <br></br>
      <input
        type="text"
        id="search"
        placeholder="search students"
        value={newSearch}
        onChange={(e) => setNewSearch(e.target.value)}
      />
     
      {newdata.filter((value)=>{
       if(newSearch===""){
         return value
       }
       else if(value.firstName.toLowerCase().includes(newSearch)|| (value.lastName.toLowerCase().includes(newSearch.toLowerCase())|| value.email.toLowerCase().includes(newSearch.toLowerCase())||value.department.toLowerCase().includes(newSearch.toLowerCase()))){
         return value
       }
       
      }).map((value,key)=>{
return ( 
    <div>
      <p>{value.firstName}</p>
      <p>{value.lastName}</p>
      <p>{value.email}</p>
      <p>{value.department}</p>
      </div>

)
      })}
   
  </div>
  )
}

export default Search