import React from 'react'

function PersonList({person}) {
  return (
    <div>
        <h2>I am {person.Name}, I am {person.age} years old , I am skilled in {person.skills}</h2>
    </div>
  )
}

export default PersonList