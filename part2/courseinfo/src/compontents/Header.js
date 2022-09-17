import React from 'react'

const Header = ({courses}) => {
    console.log(courses)
  return (
    <div>
        <h1>{courses}</h1>
    </div>
   
  )
}

export default Header