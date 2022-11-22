//? todo lo relacionado al req y res

const userControllers = require('./users.controllers')
/*
userControllers.createUser()
userControllers.findAllUsers()
userControllers.findUsersById()
*/
const getAllUsers = (req, res) => {
  const data = userControllers.findAllUsers()
  res.status(200).json(data)
}
const getUserById = (req, res) => {
  const id = req.params.id
  const data = userControllers.findUsersById(id)
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({ message: 'invalid ID' })
  }
}

const postUser = (req, res) => {
  const { first_name, last_name } = req.body
  if (first_name && last_name) {
    const data = userControllers.createUser({ first_name, last_name })
    res.status(201).json(data)
  } else {
    res.status(400).json({ message: 'Invalid Data', fields: { first_name: 'string', last_name: 'string' } })
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  postUser
}



