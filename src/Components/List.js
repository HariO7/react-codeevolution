import React from 'react'
import PersonList from './PersonList'

function List() {
    const persons = [
        {
            id:1,
            Name:'Aafrin',
            skills:'React',
            age:23
        },
        {
            id:2,
            Name:'Safwan',
            skills:'HTML/CSS',
            age:22
        },
        {
            id:1,
            Name:'ganesh',
            skills:'DSA',
            age:22
        },
    ]
    const personList = persons.map(person => <PersonList person = {person} />)
  return (
    <div>
        {
            personList
        }
    </div>
  )
}

export default List