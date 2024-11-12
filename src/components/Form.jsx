const Form = ({
  setNewName,
  newName,
  setNewNumber,
  newNumber,
  setFilter,
  setPersons,
  persons
}) => {

  const addContact = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
    } else {
      let newPeople = persons.concat({name: newName, number: newNumber})
      setPersons(newPeople)
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