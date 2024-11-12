import { useState } from 'react'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import Contacts from './components/Contacts'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '555-555-5555' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const shownPersons = persons.filter(person => {
    const pName = person.name.toLowerCase()
    const search = filter.toLowerCase()
    return pName.startsWith(search) ||
           pName.split(' ').some(part => part.startsWith(search))
  });
  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter
        setFilter={setFilter}
      />
      <h2>add a new contact</h2>
      <Form
        setNewName={setNewName}
        newName={newName}
        setNewNumber={setNewNumber}
        newNumber={newNumber}
        setFilter={setFilter}
        setPersons={setPersons}
        persons={persons}
      />
      <h2>Numbers</h2>
      <ul>
        <Contacts persons={shownPersons} />
      </ul>
    </div>
  )
}

export default App