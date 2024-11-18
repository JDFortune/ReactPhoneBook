import personsService from '../services/persons'

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

  const addPerson = (event) => {
    event.preventDefault();
    if (!newName || !newNumber) {
      setMessage('Must include a name and number');
      setTimeout(() => setMessage(null), 5000);
      return;
    }

    if (persons.some(person => person.name === newName)) {
      let person = persons.find(p => p.name === newName);

      if (person.number !== newNumber) {
        let updatedPerson = {...person, number: newNumber}
        personsService
          .update(person.id, updatedPerson)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id === person.id ? updatedPerson : p))
            setMessage(`Updated person info for ${updatedPerson.name}`)
            setTimeout(() => setMessage(null), 5000)
          })
          .catch(error => console.log(error.response.data.error));

      } else {
        alert(`${newName} is already in the phonebook`)
      }
    } else {
      let newPerson = {name: newName, number: newNumber}
      personsService
        .create(newPerson)
        .then(personObject => {
          setPersons(persons.concat(personObject))
          setMessage(`Added ${newPerson.name}`)
          setTimeout(() => setMessage(null), 5000)
        })
        .catch(error => {
          setMessage(error.response.data.error);
          setTimeout(() => setMessage(null), 5000);
        });
    }
    setNewName('')
    setNewNumber('')
    setFilter('')
  }

  const changeName = (event) => setNewName(event.target.value)
  const changeNumber = (event) => setNewNumber(event.target.value)

  return (
    <form onSubmit={addPerson}>
      <div>name: <input value={newName} onChange={changeName} /></div>
      <div>number: <input value={newNumber} onChange={changeNumber} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form