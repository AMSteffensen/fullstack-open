import { React } from 'react'

const List = ({ person, input }) => {
    const filteredData = person.filter((p) => {
        if (input === '') {
            return p;
        }
     
        else {
            return p.name.toLowerCase().includes(input)
        }
    })
    return (
        <ul>
            {filteredData.map((person) => (
                <li key={person.id}>{person.name} - {person.phone}</li>
            ))}
        </ul>
    )
}

export default List
