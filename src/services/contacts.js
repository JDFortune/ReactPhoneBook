import axios from 'axios'
const baseUrl = 'http://localhost:3001/contacts'

const getAll = () => {
  let request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newObject) => {
  let request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  let request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteContact = (id) => {
  let request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data.name)
}

export default { getAll, create, update, deleteContact}
