import contactsService from '../services/contacts'

const Contacts = ({persons, setPersons, setMessage}) => {
  const deleteContact = (person) => {
    const confirmation = window.confirm(`Delete ${person.name}?`)
    if (confirmation) {
      contactsService
        .deleteContact(person.id)
        .then(name => {
          setPersons(persons.filter(p => p.id !== person.id))
          setMessage(`${name} removed from contacts`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch((message) => {
          setMessage(`${person.name} was already removed from contacts`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  if (persons.length === 0) {
    return <p>no contacts matching filter criteria</p>
  } else {
    return persons.map((person) => {
    
    return (<li key={person.name}>
      {person.name} - {person.number} 
      <button onClick={() => deleteContact(person)}>
        delete
      </button>
    </li>
    )
  })
  }
}

export default Contacts