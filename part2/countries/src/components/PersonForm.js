import React from 'react'

const PersonForm = ({value, onSubmit, onChangeNumber, onChangeName}) => {

    // reset form after submit
    const handleClick = () => {
        const numberInput = document.getElementById('number');
        numberInput.value = '';
      }

  return (
    <div>      
    <form onSubmit={onSubmit}> 

    <div>name: <input
      value={value}
      onChange={onChangeName}
    /></div>
    <div>number: <input id="number" onChange={onChangeNumber}/></div>
    <div>
    <button  onClick={handleClick} type="submit">Add</button>
    </div>
  </form></div>
  )
}

export default PersonForm