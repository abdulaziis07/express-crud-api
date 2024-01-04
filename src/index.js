const express = require('express')
const cors = require('cors')
require('dotenv').config()

const userRoute = require('./routes/user.route')
const logRequest = require('./middleware/logRequest')

const app = express()
const PORT = process.env.PORT

// middleware
app.use(cors())
app.use(express.json())
app.use(logRequest)

// api routes
app.use('/api', userRoute)

//endpoint index
app.get('/', (req, res) => {
  res.send('<h1>Selamat datang di api akuhh</h1>')
})

// server running
app.listen(PORT, () => {
  console.log('Express server is running...')
})
