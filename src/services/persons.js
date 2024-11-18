import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  let request = axios.get(baseUrl)
  console.log('getAll', baseUrl);
  return request.then(response => response.data)
}

const create = (newObject) => {
  let request = axios.post(baseUrl, newObject)
  console.log('create', baseUrl);
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  let request = axios.put(`${baseUrl}/${id}`, newObject)
  console.log('update', baseUrl);
  return request.then(response => response.data)
}

const deletePerson = (id) => {
  let request = axios.delete(`${baseUrl}/${id}`)
  console.log('delete', baseUrl);
  return request.then(response => response.data)
}

export default { getAll, create, update, deletePerson}
