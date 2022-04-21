import React, {useState}from 'react'
import JsonData from'../services/people.json'

const Search = () => {

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
      {JsonData.filter((value)=>{
       if(newSearch==""){
         return value
       }
       else if(value.firstName.includes(newSearch)){
         return value
       }
       else if(value.lastName.includes(newSearch)){
        return value
      }
      else if(value.email.includes(newSearch)){
        return value
      }
      else if(value.department.includes(newSearch)){
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