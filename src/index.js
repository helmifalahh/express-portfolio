require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000;

const userRoutes = require('./routes/users.js')
const projectsRoutes = require('./routes/projects')

const middlewareLogRequest = require('./middleware/logs')

app.use(middlewareLogRequest)

app.use(cors())

app.use(express.json())

app.use('/users', userRoutes)

app.use('/projects', projectsRoutes)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
