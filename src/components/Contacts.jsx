const Contacts = ({persons}) => {
  if (persons.length === 0) {
    return <p>no contacts matching filter criteria</p>
  } else {
    return persons.map((person) => <li key={person.name}>{person.name} - {person.number}</li>)
  }
}

export default Contacts