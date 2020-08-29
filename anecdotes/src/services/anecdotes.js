const axios = require('axios')

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = (content) => axios.post(baseUrl, { content, votes: 0 }).then(({data}) => data)

const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject).then(({data}) => data)

export default { getAll, create, update }