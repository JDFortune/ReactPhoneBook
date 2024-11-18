import personsService from '../services/persons'

const Persons = ({persons, setPersons, setMessage}) => {
  const deletePerson = (person) => {
    const confirmation = window.confirm(`Delete ${person.name}?`)
    if (confirmation) {
      personsService
        .deletePerson(person.id)
        .then(data => {
          setMessage(`${person.name} removed from persons`)
          setPersons(persons.filter(p => p.id !== person.id))
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch((message) => {
          setMessage(`${person.name} was already removed from persons`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  if (persons.length === 0) {
    return <p>no person matching filter criteria</p>
  } else {
    return persons.map((person) => {
    
    return (<li key={person.name}>
      {person.name} - {person.number} 
      <button onClick={() => deletePerson(person)}>
        delete
      </button>
    </li>
    )
  })
  }
}

export default Persons