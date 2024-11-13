import contactsService from '../services/contacts'

const Form = ({
  setNewName,
  newName,
  setNewNumber,
  newNumber,
  setFilter,
  setPersons,
  persons,
  setMessage
}) => {

  const addContact = (event) => {
    event.preventDefault();


    if (persons.some(person => person.name === newName)) {
      let person = persons.find(p => p.name === newName);

      if (person.number !== newNumber) {
        let updatedPerson = {...person, number: newNumber}
        contactsService
          .update(person.id, updatedPerson)
          .then(contact => {
            setPersons(persons.map(p => p.id === person.id ? contact : p))
            setMessage(`Updated contact info for ${contact.name}`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })

      } else {
        alert(`${newName} is already in the phonebook`)
      }
    } else {
      let newPerson = {name: newName, number: newNumber}
      contactsService
        .create(newPerson)
        .then(personObject => {
          setPersons(persons.concat(personObject))
          setMessage(`Added ${newPerson.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
    setNewName('')
    setNewNumber('')
    setFilter('')
  }

  const changeName = (event) => setNewName(event.target.value)
  const changeNumber = (event) => setNewNumber(event.target.value)

  return (
    <form onSubmit={addContact}>
      <div>name: <input value={newName} onChange={changeName} /></div>
      <div>number: <input value={newNumber} onChange={changeNumber} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form