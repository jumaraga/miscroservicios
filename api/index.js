const { api } = require('../config')
const express = require('express');
const user = require('./components/user/network');
const auth = require('./components/auth/network')
const swaggerUI = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use('/api/user', user)
app.use('/api/auth', auth)
app.listen(api.port, () => {
   console.log(`Api escuchando en el puerto ${api.port}`)
})