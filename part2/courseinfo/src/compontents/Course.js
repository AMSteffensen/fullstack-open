import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({ courses }) => {
  //  console.log(courses)
  return (
    <div>
        <Header courses={courses.name}/>
        <Content parts={courses.parts}/>     
    </div>
   
  )
}

export default Course