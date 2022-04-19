import './App.css';
import people from './services/people.json';
function App() {
  return (
    <>
    <section className='data'>
          <header id='headerRow'>
            <h5>First Name:</h5>
            <h5>Last Name:</h5>
            <h5>Email:</h5>
            <h5>Department:</h5>
          </header>
          <main id="body">
            <code>
            {people.map(({firstName, lastName, email, department}) => 
            <>
            <div id="grid-container">
              <li className='item'>{firstName.replace(firstName[0], firstName[0].toUpperCase())}</li> 
              <li className='item'>{lastName.replace(lastName[0], lastName[0].toUpperCase())}</li> 
              <li className='item'>{email.toLowerCase()}</li> 
              <li className='item'>{department}</li>
            </div>
            </>
            )
            }
            </code>
          </main> 
    </section>
    </>
  );
}

export default App;
