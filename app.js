const express = require('express')

const port = 9000
const app = express()

app.use(express.json())




app.get('/', (req, res) => {
  res.json({
      message: 'OK'
  })
})

  app.get('/users',(req,res)=>{
  res.status(200).json(UsersDB)
  })

  app.delete('/users',(req,res)=>{
    res.json({
      message: 'deleted'
    })
  })

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})