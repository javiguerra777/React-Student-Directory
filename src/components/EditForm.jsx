import React from 'react'

 const EditForm = ({persona, exit}) => {
  return (
    <section className='main'>
      <button onClick={exit}>Cancel</button>
       <h1>{persona.firstName}</h1>
      </section>
  )
}

export default EditForm;
