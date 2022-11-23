const express = require('express')

const usersRouter = require('./users/users.router')

const port = 9500
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'OK'
  })
})

app.use('/api/v1', usersRouter)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})