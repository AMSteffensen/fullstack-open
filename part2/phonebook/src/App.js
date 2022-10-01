import { useState } from 'react'
import List from "./components/List";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])

  const [inputText, setInputText] = useState("");
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
 
  let searchHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const addName = (event) => {
    event.preventDefault()
    
    const nameObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    }
  
    const isFound = persons.some(person => {
    if (JSON.stringify(nameObject.name).toLowerCase() === JSON.stringify(person.name).toLowerCase()) {
      return true;
    }
 
    return false;
  });

  if (isFound) {
    alert(`${newName} is already added to phonebook`);
  } else {
    setPersons(persons.concat(nameObject))
    setNewName('')
    console.log(persons)
  }  
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>Search: <input onChange={searchHandler}/></div>
      </form>

      <h2>Add a new</h2>
      <form onSubmit={addName}> 

        <div>name: <input
          value={newName}
          onChange={handleNameChange}
        /></div>
        <div>number: <input onChange={handlePhoneChange}/></div>
        <div>
        <button  type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      
      <List input={inputText} person={persons} />

    </div>
  )
}



export default App