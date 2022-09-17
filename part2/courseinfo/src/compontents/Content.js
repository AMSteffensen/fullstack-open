import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
console.log(parts)
  return (
    <div>
        {parts.map(( {name, id, exercises}) => (
            <Part key={id} name={name} exercises={exercises}/>
        ))}
    
    </div>
   
  )
}

export default Content