import React from 'react'

const PersonForm = ({value, onSubmit, onChangeNumber, onChangeName}) => {
  return (
    <div>      
    <form onSubmit={onSubmit}> 

    <div>name: <input
      value={value}
      onChange={onChangeName}
    /></div>
    <div>number: <input onChange={onChangeNumber}/></div>
    <div>
    <button  type="submit">Add</button>
    </div>
  </form></div>
  )
}

export default PersonForm