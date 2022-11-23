//? Maneja las acciones de la base de datos

const UsersDB = []
/*
{
  id: 1,
  first_name: 'string',
  last_name: 'string',
  email: 'string',
  password: 'string',
  birthday: 'YYYY/MM/DD'
}
*/
let id = 1

const findAllUsers = () => {
  //? Esta funcion trae todos los usuarios de la base de datos
  return UsersDB
}

const findUsersById = (id) => {
  //? Esta funcion trae usuarios por id
  const user = UsersDB.find(item => item.id == id)
  return user
}

const createUser = (obj) => {
  //?crear usuario en la DB
  const newUser = {
    id: id++,
    first_name: obj.first_name,
    last_name: obj.last_name || 'Last name unknown',
    email: obj.email || 'email unknown',
    password: obj.password || 'password unknown',
    //? birthday: obj.birthday ? obj.birthday:'birthday unknown'
    birthday: obj.birthday || 'birthday unknown'
  }
  UsersDB.push(newUser)
  return newUser
}

module.exports = {
  findAllUsers,
  findUsersById,
  createUser
}