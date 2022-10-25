import { useState, useEffect } from 'react'
import axios from 'axios'
import List from "./components/List";
import Search from "./components/Search";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [notes, setNotes] = useState([])
  const [inputText, setInputText] = useState("");
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  

  console.log('render', notes.length, 'notes')

  const addName = (event) => {
    event.preventDefault()
    
    const nameObject = {
      name: newName,
      phone: newPhone,
      id: notes.length + 1,
    }
  
    const isFound = notes.some(person => {
    if (JSON.stringify(nameObject.name).toLowerCase() === JSON.stringify(person.name).toLowerCase()) {
      return true;
    }
 
    return false;
  });

  if (isFound) {
    alert(`${newName} is already added to phonebook`);
  } else {
    setNotes(notes.concat(nameObject))
    setNewName('')
    setNewPhone('')
  }  
  }


  let searchHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Search input={inputText} onChange={searchHandler} />
      
      <h2>Add a new</h2>
      <PersonForm value={newName} onSubmit={addName} onChangeName={handleNameChange} onChangeNumber={handlePhoneChange} />
      <h2>Numbers</h2>
      
      <List input={inputText} person={notes} />

    </div>
  )
}



export default App