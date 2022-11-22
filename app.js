const express = require('express')

const usersRouter = require('./users/users.router')

const port = 9000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'OK'
  })
})

app.use('/', usersRouter)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})