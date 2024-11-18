import { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import Persons from './components/Persons'
import Notification from './components/Notification'

import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  const shownPersons = persons.filter(person => {
    const pName = person.name.toLowerCase()
    const search = filter.toLowerCase()
    return pName.startsWith(search) ||
           pName.split(' ').some(part => part.startsWith(search))
  });

  useEffect(() => {
    console.log('effect')
    personsService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <SearchFilter
        setFilter={setFilter}
      />
      <h2>add a new person</h2>
      <Form
        setNewName={setNewName}
        newName={newName}
        setNewNumber={setNewNumber}
        newNumber={newNumber}
        setFilter={setFilter}
        setPersons={setPersons}
        persons={persons}
        setMessage={setMessage}
      />
      <h2>Numbers</h2>
      <ul>
        <Persons
          persons={shownPersons}
          setPersons={setPersons}
          setMessage={setMessage}  
        />
      </ul>
    </div>
  )
}

export default App