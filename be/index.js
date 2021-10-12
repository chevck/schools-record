require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config')[process.env.NODE_ENV || 'dev']

app.options('*', cors())
app.use(cors())
app.use(morgan('dev'))
// configure our app to handle CORS requests
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'x-access-token,X-Requested-With,Content-Type,Authorization,cache-control',
  )
  res.setHeader('X-Powered-By', 'Uncle Excellence')
  next()
})

console.log({ config })

app.listen(config.port)
